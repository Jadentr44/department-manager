
INSERT INTO department(id, name)
VALUES  (1, 'Hardware development'),(2, 'Software evelopment');

INSERT INTO roles(id, title, salary, department_id)
VALUES  (1, 'hardware manager', 100000, 1),
        (2, 'hardware JR', 130000, 1),
        (3, 'sofware manager', 60000, 2),
        (4, 'sofware JR', 75000, 2);

INSERT INTO employee(first_name, last_name,roles_id)
VALUES  ('jane','doe',2);