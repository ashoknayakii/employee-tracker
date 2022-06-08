INSERT INTO department 
(name) 
VALUES 
    ('Sales'),
    ('Legal'),
    ('Customer Service'),
    ('Engineering')
;

INSERT INTO roles 
(title, salary, department_id) 
VALUES 
    ('Sales Associate', 45000),
    ('Sales Manager', 65000),
    ('Legal Advisor', 40000),
    ('Lawyer', 55000),
    ('Customer Service', 30000),
    ('Engineering', 80000)
;

INSERT INTO employee 
(first_name, last_name, roles_id, manager_id) 
VALUES 
    ('Ronald', 'Stanley', 1, 7)
;
    




