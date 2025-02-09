package com.example.learning_management_system.repository;

import com.example.learning_management_system.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubjectRepo extends JpaRepository<Subject, Integer> {
}
