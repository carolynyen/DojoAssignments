use sakila;

SELECT first_name, last_name, email, address FROM customer 
LEFT JOIN address ON customer.address_id  = address.address_id
WHERE address.city_id = 312;

SELECT title, description, release_year, rating, special_features, category.name AS Genre FROM film 
JOIN film_category ON film_category.film_id = film.film_id 
JOIN category ON category.category_id = film_category.category_id 
WHERE category.name = "Comedy";

SELECT title, description, release_year FROM film 
JOIN film_actor ON film_actor.film_id = film.film_id WHERE actor_id = 5;

SELECT first_name, last_name, email, address FROM customer
JOIN address on customer.address_id = address.address_id
WHERE store_id = 1 AND address.city_id IN (1, 42, 312, 459);

SELECT title, rating, special_features from film 
JOIN film_actor ON film_actor.film_id = film.film_id
WHERE film.rating = "G" AND film_actor.actor_id = 15 AND special_features LIKE "%Behind the Scenes";

SELECT CONCAT_WS(' ', first_name, last_name) as Name, film.film_id, film.title, film_actor.actor_id FROM actor
JOIN film_actor ON film_actor.actor_id = actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
WHERE film.film_id = 369;

SELECT title, description, release_year, rating, special_features, category.name from film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON category.category_id = film_category.category_id
WHERE category.name = "Drama" AND film.rental_rate = 2.99;

SELECT title, description, release_year, rating, special_features, category.name, CONCAT_WS(' ', actor.first_name, actor.last_name) as ActorName from film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON category.category_id = film_category.category_id
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor on actor.actor_id = film_actor.actor_id
WHERE category.name = "Action" AND CONCAT_WS(' ', actor.first_name, actor.last_name) = "SANDRA KILMER";

