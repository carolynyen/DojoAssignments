from flask import Flask, request, redirect, render_template, flash, session
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
import re, time
from time import strftime

app = Flask(__name__)
app.secret_key= "Heythere11"
mysql = MySQLConnector(app,'thewall')
bcrypt = Bcrypt(app)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
PW_REGEX = re.compile(r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$')

@app.route('/')
def index():
    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    return render_template('index.html', users=users)

@app.route('/success')
def success():
    if 'userid' not in session:
        flash('You have not logged in properly')
        return redirect('/')
    query = "SELECT * FROM users WHERE id = :specific_id;"
    data = {'specific_id': session['userid']}
    users = mysql.query_db(query, data)
    return render_template('success.html', users=users[0])

@app.route('/users', methods=['POST'])
def create_user():
    first_name= request.form['first_name']
    last_name= request.form['last_name']
    email = request.form['email']
    password = request.form['password']
    status = True
    if not re.search(r'^[a-zA-Z]+$', last_name):
        flash('Last name must only have letters!')
        status = False
    if not re.search(r'^[a-zA-Z]+$', first_name):
        flash('First name must only have letters!')
        status = False
    if len(request.form['email']) < 1:
            flash("Email cannot be blank!")
            status = False
    if not EMAIL_REGEX.match(request.form['email']):
            flash("Invalid Email Address!")
            status = False
    if len(request.form['first_name']) < 3:
             flash("First Name cannot be empty and must be more than 2 letters!")
             status = False
    if len(request.form['last_name']) < 3:
             flash("Last Name cannot be empty and must be more than 2 letters!")
             status = False
    if len(request.form['password']) < 1:
            flash("Password cannot be blank!")
            status = False
    if len(request.form['password']) < 9:
            flash("Password should be more than 8 characters")
            status = False
    if not PW_REGEX.match(request.form['password']):
            flash("Invalid Password! Must have 1 uppercase letter and 1 number.")
            status = False
    if len(request.form['confirm']) < 1:
            flash("Confirm Password cannot be blank!")
            status = False
    if request.form['confirm'] != request.form['password']:
            flash("Password does not match confirm password")
            status = False
    if status == True:
            alreadyreg_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
            alreadyreg_query_data = { 'email': email }
            trying_to_reg = mysql.query_db(alreadyreg_query, alreadyreg_query_data)
            if len(trying_to_reg) > 0:
                flash('Already registered!')
                return redirect('/')
            pw_hash = bcrypt.generate_password_hash(password)
            insert_query = "INSERT INTO users (email, first_name, last_name, password, created_at) VALUES (:email, :first_name, :last_name, :password, NOW())"
            query_data = { 'email': email, 'first_name': first_name, 'last_name': last_name, 'password': pw_hash }
            mysql.query_db(insert_query, query_data)
            user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
            query_data = { 'email': email }
            user = mysql.query_db(user_query, query_data)
            session['userid'] = user[0]['id']
            return redirect('/success')
    else:
        return redirect('/')

@app.route('/login', methods=['POST'])
def login():
    status = True
    if len(request.form['email']) < 1:
            flash("Email cannot be blank!")
            status = False
    if len(request.form['password']) < 1:
            flash("Password cannot be blank!")
            status = False
    if status == True:
         email = request.form['email']
         password = request.form['password']
         user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
         query_data = { 'email': email }
         user = mysql.query_db(user_query, query_data)
         if len(user) == 0:
             flash('You have not registered.')
             return redirect('/')
         if bcrypt.check_password_hash(user[0]['password'], password):
             session['userid'] = user[0]['id']
             return redirect('/success')
         else:
             flash('Your password is wrong.')
             return redirect('/')
    else:
        return redirect('/')

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('userid')
    return redirect('/')

@app.route('/gotowall', methods=['POST'])
def gotowall():
    return redirect('/wall')

@app.route('/messages/<id>', methods=['POST'])
def store_message(id):
    message = request.form['message']
    if len(message) < 1:
        flash('no message entered!')
        return redirect('/wall')
    insert_query = "INSERT INTO messages (content, user_id, created_at, updated_at) VALUES (:content,:user_id,NOW(),NOW());"
    query_data = {'content': message, 'user_id': id}
    mysql.query_db(insert_query, query_data)
    return redirect('/wall')

@app.route('/comments/<id>', methods=['POST'])
def store_comment(id):
    comment = request.form['comment']
    if len(comment) < 1:
        flash('no comment entered!')
        return redirect('/wall')
    insert_query = "INSERT INTO comments (content, user_id, message_id, created_at, updated_at) VALUES (:content, :user_id, :message_id, NOW(), NOW())"
    query_data = {'content': comment, 'user_id': session['userid'], 'message_id': id}
    mysql.query_db(insert_query, query_data)
    return redirect('/wall')

@app.route('/wall')
def wall():
    if 'userid' not in session:
        flash('You have not logged in yet')
        return redirect('/')
    query = "SELECT * FROM users WHERE id = :specific_id;"
    data = {'specific_id': session['userid']}
    users = mysql.query_db(query, data)
    query2 = "SELECT users.id as messager_id, CONCAT(users.first_name, ' ', users.last_name) as name, messages.content as content, messages.created_at as created_at, messages.id as message_id FROM messages LEFT JOIN users ON messages.user_id = users.id ORDER BY messages.created_at DESC;"
    messages = mysql.query_db(query2)
    for em in messages:
        em['created_at'] = em['created_at'].strftime("%B %d, %Y at %I:%M %p")
    query3 = "SELECT comments.id as comment_id, CONCAT(users.first_name, ' ', users.last_name) as messager_name, CONCAT(commenters.first_name, ' ', commenters.last_name) as commenter_name, comments.content as content, comments.created_at as created_at, comments.message_id as message_id, comments.user_id as commenter_id FROM comments LEFT JOIN messages ON comments.message_id = messages.id LEFT JOIN users ON comments.message_id = users.id LEFT JOIN users AS commenters ON commenters.id = comments.user_id ORDER BY comments.created_at ASC;"
    comments = mysql.query_db(query3)
    for em in comments:
        em['created_at'] = em['created_at'].strftime("%B %d, %Y at %I:%M %p")
    return render_template('wall.html', users=users[0], messages=messages, comments=comments)

@app.route('/users/<id>/delete', methods=['POST'])
def destroy(id):
    query = "DELETE FROM users WHERE id = :id; ALTER TABLE users AUTO_INCREMENT = 1;"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/messages/<id>/delete', methods=['POST'])
def destroy_message(id):
    timequery = "SELECT * FROM messages WHERE id = :id LIMIT 1;"
    timedata = {'id': id}
    timetable = mysql.query_db(timequery, timedata)
    timetable[0]['created_at'] = timetable[0]['created_at'].strftime("%Y-%m-%d %H:%M")
    if time.strftime("%Y-%m-%d %H:%M",time.localtime(time.time() - 60*30)) > timetable[0]['created_at']:
        flash('You cannot delete messages after 30 minutes from creation of that message')
        return redirect('/wall')
    else:
        query2 = "DELETE FROM comments WHERE message_id = :id; ALTER TABLE comments AUTO_INCREMENT = 1;"
        data2 = {'id': id}
        mysql.query_db(query2, data2)
        query = "DELETE FROM messages WHERE id = :id; ALTER TABLE messages AUTO_INCREMENT = 1;"
        data = {'id': id}
        mysql.query_db(query, data)
        return redirect('/wall')

@app.route('/comments/<id>/delete', methods=['POST'])
def destroy_comment(id):
    query = "DELETE FROM comments WHERE id = :id; ALTER TABLE comments AUTO_INCREMENT = 1;"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/wall')

app.run(debug=True)
