package com.company.invitecode.service;

import com.company.invitecode.dto.AdminUserDto;
import com.company.invitecode.dto.request.AdminUserRequest;
import com.company.invitecode.dto.request.PasswordUpdateRequest;

import java.util.List;

public interface AdminUserService {
    
    /**
     * 创建新管理员
     * @param request 管理员用户信息
     * @return 创建的管理员信息
     */
    AdminUserDto createAdmin(AdminUserRequest request);
    
    /**
     * 获取所有管理员列表
     * @return 管理员列表
     */
    List<AdminUserDto> getAllAdmins();
    
    /**
     * 根据ID获取管理员信息
     * @param id 管理员ID
     * @return 管理员信息
     */
    AdminUserDto getAdminById(Long id);
    
    /**
     * 更新管理员信息
     * @param id 管理员ID
     * @param request 更新的信息
     * @return 更新后的管理员信息
     */
    AdminUserDto updateAdmin(Long id, AdminUserRequest request);
    
    /**
     * 更新管理员密码
     * @param id 管理员ID
     * @param request 密码更新请求
     * @return 是否更新成功
     */
    boolean updatePassword(Long id, PasswordUpdateRequest request);
    
    /**
     * 删除管理员
     * @param id 管理员ID
     * @return 是否删除成功
     */
    boolean deleteAdmin(Long id);
} 