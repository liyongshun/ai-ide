package com.company.invitecode.service;

import com.company.invitecode.dto.AdminUserDto;
import com.company.invitecode.dto.request.AdminUserRequest;
import com.company.invitecode.dto.request.PasswordUpdateRequest;
import com.company.invitecode.model.User;
import com.company.invitecode.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminUserServiceImpl implements AdminUserService {

    private static final Logger log = LoggerFactory.getLogger(AdminUserServiceImpl.class);
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public AdminUserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
    @Override
    @Transactional
    public AdminUserDto createAdmin(AdminUserRequest request) {
        log.info("创建新管理员: {}", request.getUsername());
        
        // 检查用户名是否已存在
        if (userRepository.existsByUsername(request.getUsername())) {
            log.warn("用户名已存在: {}", request.getUsername());
            throw new IllegalArgumentException("用户名已存在");
        }
        
        // 创建新管理员用户
        User user = new User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setEmployeeId(request.getEmployeeId());
        user.setAdmin(true); // 设置为管理员
        
        User savedUser = userRepository.save(user);
        log.info("成功创建管理员: {}", savedUser.getUsername());
        
        return new AdminUserDto(savedUser);
    }
    
    @Override
    @Transactional(readOnly = true)
    public List<AdminUserDto> getAllAdmins() {
        log.info("获取所有管理员");
        
        return userRepository.findAll().stream()
                .filter(User::isAdmin)
                .map(AdminUserDto::new)
                .collect(Collectors.toList());
    }
    
    @Override
    @Transactional(readOnly = true)
    public AdminUserDto getAdminById(Long id) {
        log.info("根据ID获取管理员: {}", id);
        
        User user = userRepository.findById(id)
                .orElseThrow(() -> {
                    log.warn("找不到管理员: {}", id);
                    return new IllegalArgumentException("找不到管理员");
                });
        
        if (!user.isAdmin()) {
            log.warn("用户不是管理员: {}", id);
            throw new IllegalArgumentException("用户不是管理员");
        }
        
        return new AdminUserDto(user);
    }
    
    @Override
    @Transactional
    public AdminUserDto updateAdmin(Long id, AdminUserRequest request) {
        log.info("更新管理员信息: {}", id);
        
        User user = userRepository.findById(id)
                .orElseThrow(() -> {
                    log.warn("找不到管理员: {}", id);
                    return new IllegalArgumentException("找不到管理员");
                });
        
        if (!user.isAdmin()) {
            log.warn("用户不是管理员: {}", id);
            throw new IllegalArgumentException("用户不是管理员");
        }
        
        // 如果要更改用户名，检查是否与其他用户冲突
        if (!user.getUsername().equals(request.getUsername()) &&
                userRepository.existsByUsername(request.getUsername())) {
            log.warn("用户名已被占用: {}", request.getUsername());
            throw new IllegalArgumentException("用户名已被占用");
        }
        
        // 更新用户信息
        user.setUsername(request.getUsername());
        if (request.getPassword() != null && !request.getPassword().isEmpty()) {
            user.setPassword(passwordEncoder.encode(request.getPassword()));
        }
        user.setEmployeeId(request.getEmployeeId());
        
        User updatedUser = userRepository.save(user);
        log.info("成功更新管理员: {}", updatedUser.getId());
        
        return new AdminUserDto(updatedUser);
    }
    
    @Override
    @Transactional
    public boolean updatePassword(Long id, PasswordUpdateRequest request) {
        log.info("更新管理员密码: {}", id);
        
        User user = userRepository.findById(id)
                .orElseThrow(() -> {
                    log.warn("找不到管理员: {}", id);
                    return new IllegalArgumentException("找不到管理员");
                });
        
        if (!user.isAdmin()) {
            log.warn("用户不是管理员: {}", id);
            throw new IllegalArgumentException("用户不是管理员");
        }
        
        // 验证旧密码
        if (!passwordEncoder.matches(request.getOldPassword(), user.getPassword())) {
            log.warn("旧密码验证失败: {}", id);
            throw new IllegalArgumentException("旧密码不正确");
        }
        
        // 更新密码
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
        
        log.info("成功更新管理员密码: {}", id);
        return true;
    }
    
    @Override
    @Transactional
    public boolean deleteAdmin(Long id) {
        log.info("删除管理员: {}", id);
        
        User user = userRepository.findById(id)
                .orElseThrow(() -> {
                    log.warn("找不到管理员: {}", id);
                    return new IllegalArgumentException("找不到管理员");
                });
        
        if (!user.isAdmin()) {
            log.warn("用户不是管理员: {}", id);
            throw new IllegalArgumentException("用户不是管理员");
        }
        
        userRepository.delete(user);
        log.info("成功删除管理员: {}", id);
        
        return true;
    }
} 