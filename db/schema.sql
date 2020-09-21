DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE  burgers_db;

-- FOR DEPLOYMENT

USE y86hxjl3wutfs5ux;


CREATE TABLE burgers(
    id int AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;