DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;


USE departments_db;

CREATE TABLE department(
    id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT  AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
       
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    roles_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (roles_id) REFERENCES roles(id)
        ON DELETE SET NULL,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
        ON DELETE SET NULL
);