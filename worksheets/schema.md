# Schema

This document will gives user a good idea of how your database's structure looks like. 
 
You may refer to the following link to learn more about postgresql schema:

1. [CREATE statements](https://www.postgresqltutorial.com/postgresql-create-table/)
2. [Foreign Keys](https://www.postgresqltutorial.com/postgresql-foreign-key/)

The following are examples of how you can create a table, replace the examples with your own create statements of all your table.
```sql

CREATE TABLE lectures (
        "lectureId" CHAR(10) PRIMARY KEY, 
        "facultyId" CHAR(10) NOT NULL,
        "semesterId" CHAR(10) NOT NULL,
        "dayOfWeek" CHAR(1) NOT NULL,
        "startTime" CHAR(4) NOT NULL,
        "endTime" CHAR(4) NOT NULL
)

CREATE TABLE technicians (
        "technicianId" CHAR(10) PRIMARY KEY,
        "semesterId" CHAR(10) NOT NULL,
        "facultyId" CHAR(10) NOT NULL,
        "dayOfWeek" CHAR(1) NOT NULL,
        "startTime" CHAR(4) NOT NULL,
        "endTime" CHAR(4) NOT NULL
)
