package com.example.learning_management_system.repository;

import com.example.learning_management_system.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepo extends JpaRepository<Student, Integer> {
}
