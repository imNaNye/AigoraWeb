DROP TABLE IF EXISTS profile_request;

CREATE TABLE profile_request (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(100),
    email VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    job_grade VARCHAR(100),
    request_type VARCHAR(100),
    opt_in BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS inquiry;

CREATE TABLE inquiry (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(100),
    email VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    job_grade VARCHAR(100),
    contact VARCHAR(100),
    `usage` VARCHAR(255),
    inquiry_message TEXT,
    opt_in BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);