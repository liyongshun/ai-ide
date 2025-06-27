package com.company.invitecode.controller;

import com.company.invitecode.dto.AdminUserDto;
import com.company.invitecode.dto.request.AdminUserRequest;
import com.company.invitecode.dto.request.PasswordUpdateRequest;
import com.company.invitecode.dto.response.ApiResponse;
import com.company.invitecode.service.AdminUserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/admin/users")
@PreAuthorize("hasRole('ADMIN')")
public class AdminUserController {

    private static final Logger log = LoggerFactory.getLogger(AdminUserController.class);
    
    private final AdminUserService adminUserService;
    
    public AdminUserController(AdminUserService adminUserService) {
        this.adminUserService = adminUserService;
    }
    
    @PostMapping
    public ResponseEntity<ApiResponse<AdminUserDto>> createAdmin(@Valid @RequestBody AdminUserRequest request) {
        log.info("收到创建管理员请求");
        
        try {
            AdminUserDto admin = adminUserService.createAdmin(request);
            return ResponseEntity.ok(ApiResponse.success("管理员创建成功", admin));
        } catch (IllegalArgumentException e) {
            log.warn("创建管理员失败: {}", e.getMessage());
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        } catch (Exception e) {
            log.error("创建管理员过程中发生错误", e);
            return ResponseEntity.internalServerError().body(ApiResponse.error("创建管理员失败: " + e.getMessage()));
        }
    }
    
    @GetMapping
    public ResponseEntity<ApiResponse<List<AdminUserDto>>> getAllAdmins() {
        log.info("获取所有管理员列表");
        
        try {
            List<AdminUserDto> admins = adminUserService.getAllAdmins();
            return ResponseEntity.ok(ApiResponse.success("获取管理员列表成功", admins));
        } catch (Exception e) {
            log.error("获取管理员列表过程中发生错误", e);
            return ResponseEntity.internalServerError().body(ApiResponse.error("获取管理员列表失败: " + e.getMessage()));
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<AdminUserDto>> getAdminById(@PathVariable Long id) {
        log.info("获取管理员信息: {}", id);
        
        try {
            AdminUserDto admin = adminUserService.getAdminById(id);
            return ResponseEntity.ok(ApiResponse.success("获取管理员信息成功", admin));
        } catch (IllegalArgumentException e) {
            log.warn("获取管理员信息失败: {}", e.getMessage());
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        } catch (Exception e) {
            log.error("获取管理员信息过程中发生错误", e);
            return ResponseEntity.internalServerError().body(ApiResponse.error("获取管理员信息失败: " + e.getMessage()));
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<AdminUserDto>> updateAdmin(
            @PathVariable Long id,
            @Valid @RequestBody AdminUserRequest request) {
        log.info("更新管理员信息: {}", id);
        
        try {
            AdminUserDto admin = adminUserService.updateAdmin(id, request);
            return ResponseEntity.ok(ApiResponse.success("更新管理员信息成功", admin));
        } catch (IllegalArgumentException e) {
            log.warn("更新管理员信息失败: {}", e.getMessage());
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        } catch (Exception e) {
            log.error("更新管理员信息过程中发生错误", e);
            return ResponseEntity.internalServerError().body(ApiResponse.error("更新管理员信息失败: " + e.getMessage()));
        }
    }
    
    @PutMapping("/{id}/password")
    public ResponseEntity<ApiResponse<Boolean>> updatePassword(
            @PathVariable Long id,
            @Valid @RequestBody PasswordUpdateRequest request) {
        log.info("更新管理员密码: {}", id);
        
        try {
            boolean result = adminUserService.updatePassword(id, request);
            return ResponseEntity.ok(ApiResponse.success("密码更新成功", result));
        } catch (IllegalArgumentException e) {
            log.warn("密码更新失败: {}", e.getMessage());
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        } catch (Exception e) {
            log.error("密码更新过程中发生错误", e);
            return ResponseEntity.internalServerError().body(ApiResponse.error("密码更新失败: " + e.getMessage()));
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Boolean>> deleteAdmin(@PathVariable Long id) {
        log.info("删除管理员: {}", id);
        
        try {
            boolean result = adminUserService.deleteAdmin(id);
            return ResponseEntity.ok(ApiResponse.success("管理员删除成功", result));
        } catch (IllegalArgumentException e) {
            log.warn("删除管理员失败: {}", e.getMessage());
            return ResponseEntity.badRequest().body(ApiResponse.error(e.getMessage()));
        } catch (Exception e) {
            log.error("删除管理员过程中发生错误", e);
            return ResponseEntity.internalServerError().body(ApiResponse.error("删除管理员失败: " + e.getMessage()));
        }
    }
} 