package com.example.learning_management_system.service;

import com.example.learning_management_system.dto.AttendanceDto;
import com.example.learning_management_system.dto.AttendanceResponseDto;
import com.example.learning_management_system.entity.Attendance;
import com.example.learning_management_system.repository.AttendanceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AttendanceService {

    @Autowired
    AttendanceRepo attendanceRepo;

    public AttendanceResponseDto addAttendance(AttendanceDto attendanceDto) {
        Attendance save = attendanceRepo.save(new Attendance(attendanceDto.getSubjectCode(),attendanceDto.getStudentRegNumber(),attendanceDto.getDate(),attendanceDto.getTime()));
        return new AttendanceResponseDto(save.getSubjectCode(), save.getStudentRegNumber(),save.getDate(),save.getTime());
    }
    public List<Attendance> getAllAttendance() {
        return attendanceRepo.findAll();
    }
}
