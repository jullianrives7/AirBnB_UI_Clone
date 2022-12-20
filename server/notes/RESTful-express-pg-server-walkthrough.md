## ===================== Create project (github) ================================

- create repo on GitHub
- clone repo from GitHub to target directory

## ===================== VS Code Project Setup: from terminal ===================

- npm init -y (initializes node package manager; package.json)
- npm install express
- npm install nodemon
- npm install pg (postgreSQL)
- npm install cors (optional)
- echo node_modules > .gitignore
- touch project.js

## ===================== .js file setup for express server ======================

const express = require("express");
const app = express();
const PORT = <port-num>;
const { Client } = require("pg");
app.use(express.json());
app.use(express.static("public"));
const cors = require("cors");
app.use(cors());

const connectionString =
"postgresql://postgres:docker@127.0.0.1:5432/<docker_data_base_name>";

const client = new Client({
connectionString: connectionString,
});

client.connect();

app.get("/", (req, res) => {
res.send("Hello World!");
});

app.listen(PORT, () => {
console.log(`Listening on port ${PORT}`);
});

## ===================== Test Server Before Moving On ===========================

- Run from terminal at project directory:
  nodemon project.js

- Run from a separate terminal at project directory:
  http GET localhost:<port-num>/ <-- Should return "Hello World!"

## ==================== start a new docker container (if needed) ================

- docker run --name galv-week6-intro-sql-exercise -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

## ==================== docker operations from base terminal ====================

- docker container ls

## ==================== enter a container =======================================

- docker exec -it <container id> bash

## ==================== enter postgres ==========================================

- psql -U postgres

## ==================== operations within postgres ==============================

- General Operations:
  \l : lists all databases
  \c <database> : switches to indicated database
  \i <filepath> : runs/'imports' the indicated file
  \dt : display all tables of the current database
  \d <target> : displays schema of target

- CREATE DATABASE apartmentlab;

- \c <database name>;

## ==================== operations within database ==============================

ADDED THESE COMMANDS TO migration.sql FILE:

DROP TABLE IF EXISTS properties;
DROP TABLE IF EXISTS owners;

<!-- --allows DROP TABLE to execute only if the "owners" & "properties" tables exist
--DROP TABLE IF EXISTS owners, properties CASCADE; <-- this will do the same as line 1&2
--CASCADE will kill off child commands (foreign key reqs)  -->

- CREATE TABLE owners (
  owner_id serial PRIMARY KEY,
  name varchar,
  age integer
  );
- CREATE TABLE properties (
  property_id serial PRIMARY KEY,
  name varchar,
  num_units integer,
  owner_id int,
  CONSTRAINT fk_owner_id
  FOREIGN KEY(owner_id)
  REFERENCES owners(owner_id)
  );

## ==================== copy .sql files to apartmentlab database ==============================

From terminal in $HOME directory:

- docker cp /Users/jullian/Desktop/Galvanize/Galvanize_Code/Galvanize_Week6/Thursday_Nov3_IntroToSQL_Exercise/Galv_Week6_intro-sql-exercise/migration.sql 669:/tmp

- docker cp /Users/jullian/Desktop/Galvanize/Galvanize_Code/Galvanize_Week6/Thursday_Nov3_IntroToSQL_Exercise/Galv_Week6_intro-sql-exercise/seed.sql 669:/tmp

## ==================== intialize .sql files in apartmentlab database ==============================

- \i tmp/migration.sql

- \i tmp/seed.sql

## ==================== view dynamically generated data from .sql files in apartmentlab database tables ============

- SELECT \* FROM owners;

- SELECT \* FROM properties;

## ==================== Questions ==================================================

PostgreSQL Documentation : https://www.postgresql.org/docs/

Write down the following sql statements that are required to solve the following tasks.

1. Show all the tables (this is a psql command).

- \dt

2. Show all the users (this is a psql command).

- \du

3. Show all the data about the owners table (this is a psql command).

- SELECT \* FROM owners;

4. Show the names of all owners.

- SELECT name FROM owners;

5. Show the ages of all of the owners in ascending order.

- SELECT age FROM owners ORDER BY age ASC;

6. Show the name of any owner whose name is mary.

- SELECT name FROM owners WHERE name LIKE '%mary%';
- SELECT name FROM owners WHERE name = 'mary';

7. Show the age of all owners who are older than 30.

- SELECT age FROM owners WHERE age > 30;

8. Show the name of all owners whose name starts with a j.

- SELECT name FROM owners WHERE name LIKE 'j%';

9. Add an owner named John who is 33 years old to the owners table.

- INSERT INTO owners (name,age) VALUES ('john',33);

10. Add an owner named Jane who is 43 years old to the owners table.

- INSERT INTO owners (name,age) VALUES ('jane',43);

11. Change Jane's age to 30.

- UPDATE owners SET age = 30 WHERE name = 'jane';

12. Change Jane's name to Janet.

- UPDATE owners SET name = 'janet' WHERE name = 'jane';

13. Add a property named Archstone that has 20 units, owned by Jane.

- INSERT INTO properties (name, num_units, owner_id) VALUES ('archstone',20,3);

14. Delete the owner named Janet.

- DELETE FROM owners WHERE name = 'janet';

15. Show all of the properties in alphabetical order that are not named Archstone and do not have an id of 3 or 5.

- SELECT \* FROM properties WHERE name != 'archstone' AND owner_id != 3 AND owner_id != 5 ORDER BY name ASC;
- SELECT \* FROM properties WHERE name NOT IN ('archstone') AND owner_id NOT IN (3, 5);

16. Count the total number of rows in the properties table

- SELECT COUNT(\*) FROM properties;

17. Show the highest age

- SELECT MAX(age) from owners;

18. Show the names of the first three owners in your owners table.

- SELECT \* FROM owners LIMIT 3;
- SELECT \* FROM owners ORDER BY owner_id LIMIT 3;

#### Bonus (this might require you to look up documentation online)

1. Create a foreign key that references the owner_id in the owners table and forces the constraint ON DELETE CASCADE.

2. Create a constraint on the properties table called positive_num_units that ensures that you can only add a num_units value that is greater than or equal to zero (research CHECK to do this)
3. Show all of the information from the owners table and the properties table in one joined table.

4. In the properties table change the name of the column "name" to "property_name".

5. Count the total number of properties where the owner_id is between 1 and 3.

6. Add a column to the owners table called fav_color with a type of TEXT
7. Change the name column in the owners table to be a type of VARCHAR(200)
8. Delete the owners table - what happens? why?

## Part 2 - Operators and Aggregates

### Questions

Write down the following sql statements that are required to solve the following tasks.

1. Find all the properties where the owner id is 2, 3 or 4.

2. Find all the owners who do not have an age of 22, 23 or 25.

3. Find all the owners who name is equal to the string 'b' concatenated with the string 'ob'.

4. Using a regular expression, find all owners whose name begins with a lower case j.

5. Find all owners where the name starts with the letter 'b' (this search should be case insensitive and does not have to use a regular expression)

6. Find the lowest age of all the owners. Give this search result a name of minimum_age

7. Find the highest age of all the owners. Give this search result a name of maximum_age

8. Find the sum of all of the ages of the owners, call this search result total

9. Find the average age of all the owners, call this search result average_age

10. Find the average age of all the owners rounded to two decimal places, call this search result average_age

11. Find the number of owners who have an age, call this search result total_age_given.

12. Find the count of each age for the owners and order it by the age ascending. Your output should look like this:

    ```
     age | count
    -----+-------
      33 |     3
      53 |     1
      73 |     1
         |     0
    (4 rows)
    ```

13. Find the count of each age for the owners and order it by the age ascending only if the age is greater than zero . Your output should look like this:

    ```
     age | count
    -----+-------
      33 |     3
      53 |     1
      73 |     1
    (3 rows)
    ```

14. Create a prepared statement called addOwner that inserts an owner with a name and age.

15. Execute the addOwner statement with the values of 'test' and 25;

16. Using the CASE operator, select the name and num_units from the properties table, and when the num_units is greater than 3000 a column called "status" should display 'huge'. If it is between 100 and 1000, "status" should display 'large'. If it is between 30 and 99 "status" should display 'medium'. If it is between 5 and 25 "status" should display 'small'. Otherwise "status" should display 'tiny'. Finally, order the results by the status and then the name - your output should look something like this

    ```
                   name               | num_units | status
    ----------------------------------+-----------+--------
     briar patch                      |      3133 | huge
     island road                      |      1133 | huge
     1020 Sunset Blvd                 |       532 | large
     Figueroa Mt Road                 |       133 | large
     archstone                        |        33 | medium
     galvanize austin                 |        33 | medium
     galvanize denver platte          |        33 | medium
     galvanize san francisco          |        33 | medium
     galvanize seattle                |        33 | medium
     grand plaza                      |        33 | medium
     hotel california                 |        33 | medium
     lovely place                     |        33 | medium
     galvanize fort collins           |        13 | small
     galvanize boulder                |         4 | tiny
     galvanize denver golden triangle |         3 | tiny
    (15 rows)
    ```

17. Select all of the names and ages for owners. If the owner does not have an age, use the COALESCE operator to give it a value of -1

18. Create a view that stores the SQL command from question 17 (the query involving CASE)

19. Using the EXPLAIN keyword, SELECT all information from the properties_size view

20. Rename your view to prop_size

21. Delete the view called prop_size

#### Bonus (this might require you to look up documentation online [here](http://www.postgresql.org/docs/9.4/static/functions-aggregate.html) and [here](http://www.postgresql.org/docs/9.1/static/sql-createfunction.html)

1. Find the number of properties for each owner as a column called number_of_properties and display their name. Your output should look like this:

   ```
      name   | number_of_properties
   ----------+----------------------
    jim      |                    9
    chrisine |                    2
    bob      |                    2
    tom      |                    2
   (4 rows)
   ```

2. Using the rank() function, rank the number of units from highest to lowest: your output should look like

   ```
    num_units | rank
   -----------+------
         3133 |    1
         1133 |    2
          532 |    3
          133 |    4
           33 |    5
           33 |    5
           33 |    5
           33 |    5
           33 |    5
           33 |    5
           33 |    5
           33 |    5
           13 |   13
            4 |   14
            3 |   15
   (15 rows)
   ```

3. Find the most commonly occuring num_units in the properties table using the mode() function.

4. Write a function called calculate_sales_tax which takes in an integer and returns that value multiplied by 12%. Remember you will not be returning an INTEGER so make sure you return the correct type.

5. Write a function call calc_annual_tax which takes in an integer and returns the result of the previous calculate_sales_tax function multiplied by 12.
