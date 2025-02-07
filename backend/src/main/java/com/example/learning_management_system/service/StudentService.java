package com.example.learning_management_system.service;


import com.example.learning_management_system.dto.StudentDto;
import com.example.learning_management_system.dto.StudentResponseDto;
import com.example.learning_management_system.entity.Student;
import com.example.learning_management_system.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentRepo studentRepo;

    public StudentResponseDto addStudent(StudentDto studentDto) {
    //String encodePassword = Base64.getEncoder().encodeToString(studentDto.getPassword().getBytes());
        Student save = studentRepo.save(new Student(studentDto.getName(), studentDto.getRegNumber(), studentDto.getTelNumber(), studentDto.getEmail(), studentDto.getPassword()));
        return new StudentResponseDto(save.getEmail(),"Student Registered !");
    }

    public List<Student> getAllStudent() {
        return studentRepo.findAll();
    }
}
