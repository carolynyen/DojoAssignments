use Friendships;
SELECT * FROM users;
select * from friendships;
SELECT users.first_name as FirstName, users.last_name as LastName, users2.first_name as FriendFirst, users2.last_name as FriendLast FROM users 
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users as users2 ON users2.id = friendships.friend_id order by friendships.id ASC;
