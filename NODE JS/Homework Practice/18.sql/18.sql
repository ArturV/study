--Parašome SQL, kuris atvaizduotų visus autorius ir kiek jie knygų turi 
--(t.y. author.id, author.name, author.surname, count(by books.author_id))

SELECT COUNT (books.id) AS bookCount, authors.firstName, authors.lastName
FROM books INNER JOIN authors ON authors.id = books.author_id
GROUP BY firstName, lastName

SELECT COUNT (books.books.id) AS bookCount, authors.firstName, authors.lastName, authors.id
FROM books INNER JOIN authors ON authors.id = books.author_id
GROUP BY authors.id
