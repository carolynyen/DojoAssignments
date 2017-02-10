use world;
select countries.name, languages.language, languages.percentage from countries join languages on languages.country_id = countries.id where languages.language = "Slovene" order by languages.percentage desc;
SELECT count(cities.id) as CityCount, countries.name as CountryName FROM cities  
left JOIN countries ON countries.id = cities.country_id group by countries.name order by CityCount DESC;
SELECT cities.name, cities.population from cities 
JOIN countries on countries.id = cities.country_id where countries.name = "Mexico" and cities.population > 500000 order by cities.population DESC;
SELECT languages.language, countries.name, languages.percentage from languages join countries on countries.id = languages.country_id where languages.percentage > 89.0 order by languages.percentage DESC;
SELECT countries.name, countries.surface_area from countries where countries.surface_area < 501 and countries.population > 100000;
SELECT countries.name, countries.government_form, countries.capital, countries.life_expectancy from countries where countries.government_form = "Constitutional Monarchy" and countries.capital > 200 and countries.life_expectancy > 75;
SELECT countries.name, cities.name, cities.district, cities.population  from cities join countries on countries.id = cities.country_id where countries.name = "Argentina" and cities.district = "Buenos Aires" and cities.population > 500000;
SELECT count(countries.id), countries.region from countries group by countries.region order by count(countries.id) DESC;