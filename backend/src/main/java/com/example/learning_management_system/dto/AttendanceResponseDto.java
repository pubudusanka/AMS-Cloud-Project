package com.example.learning_management_system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceResponseDto {
    private String subjectCode;
    private String studentRegNumber;
    private String date;
    private String time;
}
