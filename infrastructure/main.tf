provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "frontend_bucket" {
  bucket = "lms-frontend-bucket"
  acl    = "public-read"
  website {
    index_document = "index.html"
  }
}

resource "aws_rds_instance" "mysql" {
  engine         = "mysql"
  instance_class = "db.t2.micro"
  allocated_storage = 20
  username      = "admin"
  password      = "your-password"
  publicly_accessible = true
}

resource "aws_elastic_beanstalk_environment" "backend" {
  name                = "lms-backend-env"
  application         = "lms-backend"
  solution_stack_name = "64bit Amazon Linux 2 v5.4.5 running Node.js 14"
}