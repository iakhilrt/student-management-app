package com.student.studentmanagement.controller;

import com.student.studentmanagement.model.StudentResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.student.studentmanagement.model.StudentRequestDTO;
import com.student.studentmanagement.service.StudentService;
import com.student.studentmanagement.response.ResponseHandler;

import java.util.Map;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/health")
    public String health() {
        return "OK";
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody StudentRequestDTO modal) {
    StudentResponseDTO saved = studentService.register(modal);
    return ResponseHandler.generate(saved, "User registered successfully", HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable("id") Long id) {
        StudentResponseDTO responseDTO = studentService.find(id);
        return ResponseHandler.generate(responseDTO, "data fetch successfully", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllStudents(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        Page<StudentResponseDTO> studentPage = studentService.getAllStudents(page, size);

        return ResponseEntity.ok(Map.of(
                "data", studentPage.getContent(),
                "currentPage", studentPage.getNumber(),
                "totalItems", studentPage.getTotalElements(),
                "totalPages", studentPage.getTotalPages()
        ));
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@RequestBody StudentRequestDTO studentRequestDTO , @PathVariable("id")Long id){
        StudentResponseDTO responseDTO = studentService.update(studentRequestDTO,id);
        return ResponseHandler.generate(responseDTO,"Update Successfully",HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable("id") Long id){
        studentService.deleteById(id);
        return ResponseEntity.ok("User with ID " +id+" deleted successfully.");
    }



}
