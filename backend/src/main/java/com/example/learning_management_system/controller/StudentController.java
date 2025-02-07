package com.example.learning_management_system.controller;

import com.example.learning_management_system.dto.StudentDto;
import com.example.learning_management_system.dto.StudentResponseDto;
import com.example.learning_management_system.entity.Student;
import com.example.learning_management_system.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {

    @Autowired
    StudentService studentService;

    @PostMapping("/savestudent")
    public ResponseEntity<StudentResponseDto> addStudent(@RequestBody StudentDto studentDto) {
        StudentResponseDto register = studentService.addStudent(studentDto);
        return new ResponseEntity<>(register, HttpStatus.CREATED);
    }

    @GetMapping("/getstudent")
    public List<Student> getAllStudent() {
        List<Student> allStudent = studentService.getAllStudent();
        return allStudent;
    }
}
