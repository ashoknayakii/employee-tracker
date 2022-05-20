USE employees;

INSERT INTO department 
(name) 
VALUES 

    ('Sales'),
    ('Legal'),
    ('Customer Service'),
    ('Engineering')
;

INSERT INTO Roles 
(title, salary, department_id) 
VALUES 
    ('Sales Associate', 45000 , 1),
    ('Sales Manager', 65000, 1),
    ('Legal Advisor', 40000 , 2),
    ('Lawyer', 55000 , 2),
    ('Customer Service', 30000, 3),
    ('Engineering', 80000, 4)
;

-- INSERT INTO employee 
-- (title, salary, roles_id) 
-- VALUES 
-- {
--     ('Ronald', 'Stanley', 1),
--     ('Sales Manager', 65000, 1),
--     ('Legal Advisor', 40000 , 2),
--     ('Lawyer', 55000 , 2)
--     'Customer Service',
--     'Engineering'
-- };


