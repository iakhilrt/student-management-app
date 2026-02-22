package com.student.studentmanagement.service;

import com.student.studentmanagement.exception.Validation;
import com.student.studentmanagement.model.AdminEntity;
import com.student.studentmanagement.model.AdminLoginRequest;
import com.student.studentmanagement.repository.AdminRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminService {

    private final AdminRepository adminRepository;

    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public void login(AdminLoginRequest requestData) {

        List<String> error = new ArrayList<>();

        AdminEntity adminEntity = adminRepository
                .findByUsername(requestData.getUsername())
                .orElse(null);

        if (adminEntity == null ||
                !adminEntity.getPassword().equals(requestData.getPassword())) {

            error.add("Invalid username or password");
        }

        if (!error.isEmpty()) {
            throw new Validation(error, "error");
        }
    }

}
