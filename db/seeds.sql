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
    ('Sales Associate', 45000, 1),
    ('Sales Manager', 65000, 1),
    ('Legal Advisor', 40000, 2),
    ('Lawyer', 55000, 2),
    ('Customer Service', 30000, 3),
    ('Engineering', 80000, 4)
;

INSERT INTO employee 
(first_name, last_name, roles_id, manager_id) 
VALUES 
    ('Ronald', 'Stanley', 1),
    ('Steven', 'Smith', 2)
;
    




