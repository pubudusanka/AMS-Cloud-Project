# AMS Cloud Project

## Overview
The AMS Cloud Project is a cloud-based Attendance Marking System (AMS) designed to manage user authentication, attendance, QR code generation, and more. The system is deployed on AWS and uses modern technologies like React, Node.js, Spring Boot, and MySQL.

---

## Features
- **User Authentication**: Allows users to log in and manage their profiles.
- **Attendance Management**: Students can mark attendance, and administrators can track it.
- **QR Code Generation**: For attendance verification and other purposes.
- **Cloud Deployment**: The entire application is hosted on AWS using services like S3, Elastic Beanstalk, and RDS.

---

## Tech Stack
- **Frontend:**
    - React.js
    - AWS S3 (Static Hosting)
    - CloudFront (CDN for better performance)
- **Backend:**
    - Node.js with Express.js (for handling APIs)
    - Spring Boot (for advanced backend functionality)
    - AWS Elastic Beanstalk (for deploying backend)
- **Database:**
    - MySQL hosted on AWS RDS (for database management)
- **Storage:**
    - AWS S3 (for storing files like PDFs and images)

---

## Repository Structure
```bash
LMS-Cloud-Project/
 ├── backend/              # Spring Boot & Express.js backend  
 ├── frontend/             # React.js frontend  
 ├── infrastructure/       # Terraform & AWS config files  
 ├── .github/workflows/    # GitHub Actions CI/CD  
 ├── README.md             # Project documentation  
