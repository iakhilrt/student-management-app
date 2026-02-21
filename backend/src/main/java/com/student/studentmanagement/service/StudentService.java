package com.student.studentmanagement.service;

import com.student.studentmanagement.exception.UserNotFound;
import com.student.studentmanagement.model.StudentResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.student.studentmanagement.model.StudentEntity;
import com.student.studentmanagement.model.StudentRequestDTO;
import com.student.studentmanagement.repository.StudentRepository;


@Service
public class StudentService {

    private final StudentRepository studentRepository;
    
    public StudentService(StudentRepository studentRepository){
        this.studentRepository=studentRepository;
    }

    public StudentResponseDTO register(StudentRequestDTO modal){
        StudentEntity studentEntity = new StudentEntity();
        studentEntity.setName(modal.getName());
        studentEntity.setEmail(modal.getEmail());
        studentEntity.setCourse(modal.getCourse());
        studentEntity.setYear(modal.getYear());
        StudentEntity savedEntity = studentRepository.save(studentEntity);

        return new StudentResponseDTO(
                savedEntity.getId(),
                savedEntity.getName(),
                savedEntity.getEmail(),
                savedEntity.getCourse(),
                savedEntity.getYear()
        );
    }

    public StudentResponseDTO find(Long id){
        StudentEntity studentEntity = studentRepository.
                findById(id).orElseThrow(() -> new RuntimeException("Student not found with id: " + id));

        return mapToResponse(studentEntity);
    }

    public Page<StudentResponseDTO> getAllStudents(int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

        Page<StudentEntity> studentPage = studentRepository.findAll(pageable);

        return studentPage.map(this::mapToResponse);
    }

    public StudentResponseDTO update(StudentRequestDTO studentRequestDTO, Long id) {
        StudentEntity studentEntity = studentRepository.
                findById(id).orElseThrow(() -> new RuntimeException("Student not found with id: " + id));
        if (studentRequestDTO.getName() != null) {
            studentEntity.setName(studentRequestDTO.getName());
        }

        if (studentRequestDTO.getEmail() != null) {
            studentEntity.setEmail(studentRequestDTO.getEmail());
        }

        if (studentRequestDTO.getCourse() != null) {
            studentEntity.setCourse(studentRequestDTO.getCourse());
        }

        if (studentRequestDTO.getYear() != 0) {
            studentEntity.setYear(studentRequestDTO.getYear());
        }

        studentRepository.save(studentEntity);

        return mapToResponse(studentEntity);
    }

    private StudentResponseDTO mapToResponse(StudentEntity student) {

        return new StudentResponseDTO(
                student.getId(),
                student.getName(),
                student.getEmail(),
                student.getCourse(),
                student.getYear()
        );
    }

    public void deleteById(Long id) {
        if (!studentRepository.existsById(id)){
            throw new UserNotFound("User not found with id: " + id);
        }
        studentRepository.deleteById(id);
    }
}
