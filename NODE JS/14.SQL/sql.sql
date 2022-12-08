--https://sqliteonline.com/

-- KOMENTARAI TRINA DIDZIASIAS RAIDES. KONVENCIJA - IS DIDZIUJU
-- CREATE table users(id int, firstName varchar(35) )
-- INSERT into users (id, firstname) VALUES (1, "Jonas"),(2, "Mantas"), " ;
-- SELECT * from users;

-- drop table products;
--CREATE TABLE products (id int, name varchar(50), primary key(id));
-- kai pridedami stulpeliai, vykdome migrationus (uzpildome laukelius, jei reikia / duomenu perkelimas i kitas vietas)

--ALTER TABLE products ADD price int;
-- INSERT into products (name, price) VALUES ("Bread", 1),( "iPhone", 15);
-- INSERT into products (id, name, price) VALUES (1, "Web Services",  159);
-- INSERT into products (id, name, price) VALUES (2, "Bike",  379);
-- INSERT into products (id, name, price) VALUES(3, "iPad", 199);


DELETE FROM products WHERE id = 2;

Update products set name="iPad 2020" WHERE name="iPad";

SELECT * from products WHERE id NOT null;