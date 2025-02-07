package com.example.learning_management_system.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StudentDto {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String regNumber;
    private String telNumber;
    private String email;
    private String password;

    public StudentDto(String name, String regNumber, String telNumber, String email, String password) {
        this.name = name;
        this.regNumber = regNumber;
        this.telNumber = telNumber;
        this.email = email;
        this.password = password;
    }
}
