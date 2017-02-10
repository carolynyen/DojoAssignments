USE lead_gen_business;

SELECT SUM(billing.amount) as BillingSum FROM billing 
WHERE billing.charged_datetime 
LIKE "2012-03%";

SELECT SUM(billing.amount) FROM billing
LEFT JOIN clients ON billing.client_id = clients.client_id
WHERE billing.client_id = 2;

SELECT sites.domain_name FROM sites
LEFT JOIN clients ON sites.client_id = clients.client_id
WHERE sites.client_id = 10;

SELECT COUNT(sites.domain_name) as SiteNumber, MONTHNAME(sites.created_datetime) as Month, YEAR(sites.created_datetime) as Year FROM sites
JOIN clients ON clients.client_id = sites.client_id
WHERE clients.client_id = 1
GROUP BY Month, Year;

SELECT sites.domain_name as Sites, COUNT(leads.leads_id) as Leads, leads.registered_datetime as Time FROM leads
LEFT JOIN sites ON leads.site_id = sites.site_id
WHERE leads.registered_datetime BETWEEN '2011/01/01' AND '2011/02/15'
GROUP BY Sites
ORDER BY Time;

SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) as client_name, COUNT(leads.leads_id) as Leads FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads on sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011/01/01' AND '2011/12/31'
GROUP BY clients.client_id;

SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) as client_name, COUNT(leads.leads_id) as Leads, MONTHNAME(leads.registered_datetime) as month_gen FROM clients
LEFT JOIN sites ON clients.client_id = sites.client_id
LEFT JOIN leads on sites.site_id = leads.site_id
WHERE leads.registered_datetime BETWEEN '2011/01/01' AND '2011/6/31'
GROUP BY clients.client_id
ORDER BY month_gen;

SELECT CONCAT_WS(' ', clients.first_name, clients.last_name) as client_name, sites.domain_name AS site_name, COUNT(leads.leads_id) as Leads, leads.registered_datetime as Time FROM sites
LEFT JOIN clients ON clients.client_id = sites.client_id
LEFT JOIN leads on leads.site_id = sites.site_id
WHERE leads.registered_datetime >= '2011/01/01' AND leads.registered_datetime <= '2011/12/31'
GROUP BY sites.client_id, sites.site_id;

SELECT SUM(billing.amount) as Sum, CONCAT(clients.first_name, ' ',clients.last_name) as client_name, MONTHNAME(billing.charged_datetime) as Month, YEAR(billing.charged_datetime) as Year from billing
LEFT JOIN clients ON billing.client_id = clients.client_id
GROUP BY clients.client_id, MONTHNAME(billing.charged_datetime)
ORDER BY clients.client_id, Year, Month(billing.charged_datetime) ASC;

SELECT CONCAT(clients.first_name, ' ',clients.last_name) as client_name, GROUP_CONCAT(sites.domain_name SEPARATOR '/') as Sites FROM sites
JOIN clients ON sites.client_id = clients.client_id
GROUP BY clients.client_id;



