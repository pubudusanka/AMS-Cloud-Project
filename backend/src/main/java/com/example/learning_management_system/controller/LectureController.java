package com.example.learning_management_system.controller;

import com.example.learning_management_system.dto.LectureDto;
import com.example.learning_management_system.dto.LectureResponseDto;
import com.example.learning_management_system.entity.Lecture;
import com.example.learning_management_system.service.LectureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/lecture")
@CrossOrigin(origins = "http://localhost:5173")
public class LectureController {

    @Autowired
    LectureService lectureService;

    @PostMapping("/savelecture")
    public ResponseEntity<LectureResponseDto> saveLecture(@RequestBody LectureDto lectureDto) {
        LectureResponseDto register = lectureService.addLecture(lectureDto);
        return new ResponseEntity<>(register, HttpStatus.CREATED);
    }

    @GetMapping("/getlecture")
    public List<Lecture> getAllLecture() {
        List<Lecture> allLecture = lectureService.getAllLecture();
        return allLecture;
    }
}
