package com.example.learning_management_system.dto;

import com.project.Attendance.Marking.System.Entity.Lecture;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubjectDto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer SubjectId;
    private String SubjectName;
    private String SubjectCode;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "lecture_regNumber")
    private Lecture LectureRegNumber;

}
