
CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL, 
  department_id INT UNSIGNED NOT NULL,
  INDEX dept_ind(department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

  CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  roles_id INT UNSIGNED NOT NULL,
  INDEX roles_ind(roles_id),
  CONSTRAINT fk_roles FOREIGN KEY (roles_id) REFERENCES roles(id) ON DELETE CASCADE,
  manager_id INT UNSIGNED,
  INDEX man_ind(manager_id),
  CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL

);





  
    -- ('Peter', 'Farnsworth', 4),
    -- ('Stacey', 'McWalter', 3, 3),
    -- ('Taylor', 'Finch', 4),
    -- ('Summer', 'Adams', 2),
    -- ('Stephanie', 'Peters', 2),
    -- ('Evan', 'Thompson', 3),
    -- ('Ella', 'Mae', 5, 2),
    -- ('Tamara', 'Stanley', 1, 7),
    -- ('Chris', 'Todd', 1, 6),
    -- ('Tilda', 'Wilson', 6),
    -- ('Fred', 'Stanton', 3, 3)