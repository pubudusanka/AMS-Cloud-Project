package com.example.learning_management_system.controller;

import com.example.learning_management_system.dto.SubjectDto;
import com.example.learning_management_system.dto.SubjectResponseDto;
import com.example.learning_management_system.entity.Subject;
import com.example.learning_management_system.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/attendance")
public class SubjectController {

    @Autowired
    SubjectService subjectService;

    @PostMapping("/savesubect")
    public ResponseEntity<SubjectResponseDto> addSubject (@RequestBody SubjectDto subjectDto) {
        SubjectResponseDto register = subjectService.addSubject(subjectDto);
        return new ResponseEntity<>(register, HttpStatus.CREATED);
    }

    @GetMapping("/getsubject")
    public List<Subject> getAllSubject() {
        List<Subject> allSubject = subjectService.getAllSubject();
        return allSubject;
    }

}
