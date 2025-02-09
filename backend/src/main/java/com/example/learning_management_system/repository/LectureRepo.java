package com.example.learning_management_system.repository;

import com.example.learning_management_system.entity.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LectureRepo extends JpaRepository<Lecture, Integer> {
}
