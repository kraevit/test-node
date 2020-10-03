### SQL Basic Syntax

* Create, alter and delete databases & tables
* Query a database using multiple operators
* Data types
* Insert, update and delete records
* Join tables togheter
* Use aliases
* Constraints (Primary, foreign)
* Indexes
* Create, alter and delete databases & tables

#### CREATE/DELETE DATABASE

```sql
CREATE DATABASE dbname;
CREATE DATABASE acme;
CREATE DATABASE test;
DROP DATABASE dbname;
```

#### USE DATABASE

```sql
USE acme;
```

#### CREATE TABLE

```sql
CREATE TABLE customers (
  id INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zipcode VARCHAR(255),
  PRIMARY KEY(id)
);
```

#### INSERT
```sql
INSERT INTO customers (firstName, lastName, email, address, city, state, zipcode)
VALUES ('John', 'Doe', 'jdoe@gmail.com', '55 Main St', 'Boston', 'Massachussets', '9000');
```

#### UPDATE
```sql
UPDATE customers
SET email = 'newemail@gmail.com'
WHERE id = 3;
```

#### DELETE
```sql
DELETE FROM customers
WHERE id = 3;
```

#### ALTER (add columns, delete columns, change datatype)

##### Add Column
```sql
ALTER TABLE customers ADD testCol VARCHAR(255);
```

##### Change Datatype
```sql
ALTER TABLE customers
MODIFY COLUMN testCol INT(11);
```

##### Delete Column
```sql
ALTER TABLE customers
DROP COLUMN testCol;
```

#### SELECT
```sql
SELECT * FROM customers;
SELECT firstName, lastName FROM customers;
SELECT * FROM customers WHERE id = 2;
```

#### SORTING
```sql
SELECT * FROM customers ORDER BY lastName;
SELECT * FROM customers ORDER BY lastName DESC;
SELECT * FROM customers ORDER BY lastName ASC;
SELECT state FROM customers;
```

#### Add Column
```sql
ALTER TABLE customers
ADD COLUMN age INT;
```

#### BETWEEN
```sql
SELECT * FROM customers
WHERE age
BETWEEN 22 AND 40;
```

#### LIKE ( ends with n )
```sql
SELECT * FROM customers
WHERE city LIKE '%n%';
```

#### IN
```sql
SELECT * FROM customers
WHERE state IN ('New York', 'New Hampshire');
```

#### INDEXES

* An index can be created in a table to find data more quickly and efficiently
* Users do not see indexes, the are just used to speed up queries
* Only create indexes on columns(and tables) that will be frequently searched agains;

* IF we want our customers to search from city we need to add an index to that column

```sql
CREATE INDEX cityIndex
ON customers(city);
```

```sql
DROP INDEX cityIndex
ON customers;
```

#### RELATIONSHIPS AND FOREIGN KEYS
```sql
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  price INT,
  PRIMARY KEY(id)
);


CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  orderNumber INT
  productId INT,
  customerId INT,
  age INT,
  orderDate DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  FOREIGN KEY(customerId) REFERENCES customers(id),
  FOREIGN KEY(productId) REFERENCES product(id)
);
```

#### JOIN ( used to combine rows from two or more tables based on a common field between them)

```sql
INSERT INTO product (name, price)
VALUES
  ('Product One', 10),
  ('Product Two', 5),
  ('Product Three', 67),
  ('Product Four', 45),
  ('Product Five', 100);

INSERT INTO orders (orderNumber, productId, customerId)
VALUES
  (001, 1,4)
  (002, 3,1)
  (003, 1,1)
  (004, 1,2)
  (005, 1,1)
  (006, 4,6)
  (007, 4,4)
  (008, 4,4)
  (009, 2,5);
```

#### INNER JOIN
```sql
SELECT customers.firstName, customers.lastName, orders.orderNumber
FROM customers
INNER JOIN orders
ON customers.id = orders.customerId
ORDER BY customer.lastName;
```

#### LEFT JOIN
```sql
SELECT customers.firstName, customers.lastName, orders.orderNumber, orders.orderDate
FROM customers
LEFT JOIN orders
ON customers.id = orders.customerId;
```

#### RIGHT JOIN
```sql
SELECT orders.orderNumber, customers.firstName, customers.lastName
FROM orders
RIGHT JOIN customers
ON orders.customerId = customers.id
ORDER BY orders.orderNumber;
```

#### JOIN 3 or more TABLES
```sql
SELECT orders.orderNumber, customers.firstName, customers.lastName, products.name
FROM orders
INNER JOIN products
ON orders.productId = products.id
INNER JOIN customers
ON orders.customerId = customers.id
ORDER BY orders.oderNumber;
```

#### ALIASES
```sql
SELECT firstName AS 'First Name', lastName as 'Last Name'
FROM customers;

SELECT CONCAT(firstName,' ',lastName) AS 'Name', address, city, state
FROM customers;

SELECT CONCAT(firstName,' ',lastName) AS 'Name', CONCAT(address,' ',city,' ',state) AS 'Address' 
FROM customers;

SELECT o.id, o.orderDate, c.firstName, c.lastName
FROM customers AS c, orders AS o;
```

#### SQL AGREGATE FUNCTIONS
```sql
SELECT AVG(age) FROM customers;
SELECT COUNT(age) FROM customers;
SELECT MAX(age) from customers;
SELECT MIN(age) from customers;
SELECT SUM(age) from customers;
SELECT UCASE(fisrtName), lastName FROM customers;
SELECT LCASE(fisrtName), UCASE(lastName) FROM customers`;
```

#### GROUP BY
```sql
SELECT age, COUNT(age)
FROM CUSTOMERS
WHERE age > 30
GROUP BY age;

SELECT age, COUNT(age)
FROM customers
GROUP BY age
HAVING COUNT(age) >= 2;
```
