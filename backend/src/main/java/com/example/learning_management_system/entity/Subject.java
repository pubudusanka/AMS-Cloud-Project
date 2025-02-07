package com.example.learning_management_system.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer SubjectId;
    private String SubjectName;
    private String SubjectCode;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "lecture_regNumber")
    private Lecture LectureRegNumber;

    public Subject(String subjectName, String subjectCode, Lecture lectureRegNumber) {
        SubjectName = subjectName;
        SubjectCode = subjectCode;
        LectureRegNumber = lectureRegNumber;
    }
}
