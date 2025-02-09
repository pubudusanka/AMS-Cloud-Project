package com.example.learning_management_system.service;

import com.example.learning_management_system.dto.LectureDto;
import com.example.learning_management_system.dto.LectureResponseDto;
import com.example.learning_management_system.entity.Lecture;
import com.example.learning_management_system.repository.LectureRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.List;

@Service
public class LectureService {

    @Autowired
    LectureRepo lectureRepo;

    public LectureResponseDto addLecture(LectureDto lectureDto) {
        String encodePassword = Base64.getEncoder().encodeToString(lectureDto.getPassword().getBytes());
        Lecture save = lectureRepo.save(new Lecture(lectureDto.getName(), lectureDto.getRegNumber(), lectureDto.getTelNumber(), lectureDto.getEmail(), encodePassword));
        return new LectureResponseDto(save.getEmail(),"Lecture Registered !");
    }

    public List<Lecture> getAllLecture() {
        return lectureRepo.findAll();
    }
}
