package com.company.invitecode.dto.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class AdminUserRequest {
    
    @NotBlank(message = "用户名不能为空")
    @Size(min = 3, max = 50, message = "用户名长度必须在3到50个字符之间")
    private String username;
    
    @Size(min = 6, message = "密码长度必须至少为6个字符")
    private String password;
    
    @Size(max = 50, message = "员工ID长度不能超过50个字符")
    private String employeeId;
    
    public AdminUserRequest() {
    }
    
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public String getPassword() {
        return password;
    }
    
    public void setPassword(String password) {
        this.password = password;
    }
    
    public String getEmployeeId() {
        return employeeId;
    }
    
    public void setEmployeeId(String employeeId) {
        this.employeeId = employeeId;
    }
} 