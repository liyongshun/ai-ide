package com.company.invitecode.dto.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class PasswordUpdateRequest {
    
    @NotBlank(message = "旧密码不能为空")
    private String oldPassword;
    
    @NotBlank(message = "新密码不能为空")
    @Size(min = 6, message = "密码长度必须至少为6个字符")
    private String newPassword;
    
    public PasswordUpdateRequest() {
    }
    
    public String getOldPassword() {
        return oldPassword;
    }
    
    public void setOldPassword(String oldPassword) {
        this.oldPassword = oldPassword;
    }
    
    public String getNewPassword() {
        return newPassword;
    }
    
    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
} 