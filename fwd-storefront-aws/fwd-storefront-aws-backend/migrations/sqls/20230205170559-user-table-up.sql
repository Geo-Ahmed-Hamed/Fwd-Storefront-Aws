CREATE TABLE Users ( Id SERIAL PRIMARY KEY, 
                     FirstName VARCHAR(100) NOT NULL, 
                     LastName VARCHAR(100) NOT NULL, 
                     Password VARCHAR(200) NOT NULL );