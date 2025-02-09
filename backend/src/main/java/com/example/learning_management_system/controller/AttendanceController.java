package com.example.learning_management_system.controller;

import com.example.learning_management_system.dto.AttendanceDto;
import com.example.learning_management_system.dto.AttendanceResponseDto;
import com.example.learning_management_system.entity.Attendance;
import com.example.learning_management_system.service.AttendanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("attendance")
public class AttendanceController {

    @Autowired
    AttendanceService attendanceService;

    @PostMapping("/saveattendance")
    public ResponseEntity<AttendanceResponseDto> saveAttendance(@RequestBody AttendanceDto attendanceDto) {
        AttendanceResponseDto register = attendanceService.addAttendance(attendanceDto);
        return new ResponseEntity<>(register, HttpStatus.CREATED);
    }
    @GetMapping("/getattendance")
    public List<Attendance> getAllAttendance() {
        List<Attendance> allAttendance = attendanceService.getAllAttendance();
        return allAttendance;
    }
}
