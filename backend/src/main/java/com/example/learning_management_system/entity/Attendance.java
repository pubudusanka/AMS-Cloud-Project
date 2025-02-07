package com.example.learning_management_system.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String date;
    private String time;
    private String subjectCode;
    private String studentRegNumber;

    public Attendance(String date, String time, String subjectCode, String studentRegNumber) {
        this.date = date;
        this.time = time;
        this.subjectCode = subjectCode;
        this.studentRegNumber = studentRegNumber;
    }
}
