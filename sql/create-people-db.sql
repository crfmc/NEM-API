CREATE DATABASE IF NOT EXISTS people;
SHOW DATABASES;
GRANT ALL PRIVILEGES ON people.*
  TO 'people_mgmt'@'localhost'
  IDENTIFIED BY 'agedpotatoes';