package com.student.studentmanagement.controller;

import com.student.studentmanagement.exception.Validation;
import com.student.studentmanagement.model.AdminLoginRequest;
import com.student.studentmanagement.response.ResponseHandler;
import com.student.studentmanagement.service.AdminService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AdminLoginRequest request) {
        try {
            adminService.login(request);
            return ResponseHandler.generate(
                    Map.of("username", request.getUsername()),
                    "Login Successfully",
                    HttpStatus.OK
            );
        } catch (Validation e) {
            return ResponseHandler.generate(
                    e.getError(),
                    "Login Failed",
                    HttpStatus.BAD_REQUEST
            );
        }
    }
}
