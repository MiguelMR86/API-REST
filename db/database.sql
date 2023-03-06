CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee (name, salary) VALUES
    ("Miguel", 3200),
    ("Joe", 2000),
    ("Herny", 2100),
    ("Laura", 3000);