#!/bin/bash

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}=================================${NC}"
echo -e "${BLUE}  邀请码系统启动脚本  ${NC}"
echo -e "${BLUE}=================================${NC}"

# 检查Java环境
if ! command -v java &> /dev/null; then
    echo -e "${RED}错误: 未找到Java环境，请安装JDK 11+${NC}"
    exit 1
fi

# 检查Maven环境
if ! command -v mvn &> /dev/null; then
    echo -e "${RED}错误: 未找到Maven，请安装Maven 3.6+${NC}"
    exit 1
fi

# 检查Node环境
if ! command -v node &> /dev/null; then
    echo -e "${RED}错误: 未找到Node.js，请安装Node.js 18+${NC}"
    exit 1
fi

# 构建并启动后端
echo -e "${YELLOW}正在构建后端服务...${NC}"
cd invite-code/backend || exit
mvn clean package -DskipTests

if [ $? -ne 0 ]; then
    echo -e "${RED}后端构建失败!${NC}"
    exit 1
fi

echo -e "${GREEN}后端构建成功!${NC}"

# 启动后端服务
echo -e "${YELLOW}正在启动后端服务...${NC}"
java -jar target/invitecode-0.0.1-SNAPSHOT.jar &
BACKEND_PID=$!
echo -e "${GREEN}后端服务已启动，PID: $BACKEND_PID${NC}"

# 等待后端启动
echo -e "${YELLOW}等待后端服务就绪...${NC}"
sleep 10

# 返回项目根目录
cd ../..

# 启动前端
echo -e "${YELLOW}正在启动前端应用...${NC}"
npm run dev &
FRONTEND_PID=$!
echo -e "${GREEN}前端应用已启动，PID: $FRONTEND_PID${NC}"

# 输出访问信息
echo ""
echo -e "${GREEN}系统已启动!${NC}"
echo -e "${BLUE}----------------------------------------${NC}"
echo -e "${YELLOW}后端API地址: ${NC}http://localhost:8080/api"
echo -e "${YELLOW}前端页面地址: ${NC}http://localhost:3000"
echo -e "${YELLOW}邀请码验证页面: ${NC}http://localhost:3000/invite/verify"
echo -e "${YELLOW}管理员登录页面: ${NC}http://localhost:3000/invite/admin/login"
echo -e "${BLUE}----------------------------------------${NC}"
echo ""
echo -e "${YELLOW}按 Ctrl+C 停止服务${NC}"

# 等待用户中断
trap "kill $BACKEND_PID $FRONTEND_PID; echo -e '${RED}服务已停止${NC}'; exit" INT TERM
wait 