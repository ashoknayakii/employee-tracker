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

INSERT INTO employee 
(first_name, last_name, roles_id, manager_id) 
VALUES 
    ('Ronald', 'Stanley', 1, 2 ),
    ('Steven', 'Smith', 2),
    ('Peter', 'Farnsworth', 4),
    ('Stacey', 'McWalter', 3, 3),
    ('Taylor', 'Finch', 5, 6),
    ('Summer', 'Adams', 2),
    ('Stephanie', 'Peters', 1, 6),
    ('Evan', 'Thompson', 3, 9),
    ('Ella', 'Mae', 4),
    ('Tamara', 'Stanley', 5),
    ('Chris', 'Todd', 5),
    ('Tilda', 'Wilson', 1, 13),
    ('Fred', 'Stanton', 2)
;
    




