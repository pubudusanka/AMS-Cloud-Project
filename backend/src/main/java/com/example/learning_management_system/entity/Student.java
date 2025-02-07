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

public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String regNumber;
    private String telNumber;
    private String email;
    private String password;

    public Student(String name, String regNumber, String telNumber, String email, String password) {
        this.name = name;
        this.regNumber = regNumber;
        this.telNumber = telNumber;
        this.email = email;
        this.password = password;
    }
}
