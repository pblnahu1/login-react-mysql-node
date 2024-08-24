CREATE DATABASE login_react_mysql_node;
USE login_react_mysql_node;

CREATE TABLE users (
    id_user INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email_user VARCHAR(255) NOT NULL UNIQUE,
    password_user VARCHAR(255) NOT NULL
);

INSERT INTO USERS (email_user, password_user) VALUES
('pXQp3@example.com', '123456')
