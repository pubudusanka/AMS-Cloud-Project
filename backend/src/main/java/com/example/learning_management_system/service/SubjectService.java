package com.example.learning_management_system.service;

import com.example.learning_management_system.dto.SubjectDto;
import com.example.learning_management_system.dto.SubjectResponseDto;
import com.example.learning_management_system.entity.Subject;
import com.example.learning_management_system.repository.SubjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubjectService {

    @Autowired
    SubjectRepo subjectRepo;

    public SubjectResponseDto addSubject(SubjectDto subjectDto) {
        Subject save = subjectRepo.save(new Subject(subjectDto.getSubjectName(), subjectDto.getSubjectCode(), subjectDto.getLectureRegNumber()));
        return new SubjectResponseDto(save.getSubjectName(), "Subject Added !");
    }

    public List<Subject> getAllSubject() {
        return subjectRepo.findAll();
    }
}
