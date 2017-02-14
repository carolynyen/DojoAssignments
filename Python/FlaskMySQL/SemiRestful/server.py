from flask import Flask, request, redirect, render_template
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key= "heythere"
mysql = MySQLConnector(app,'login')

@app.route('/users', methods=['GET'])
def index():
    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    return render_template('index.html', friends=users)

@app.route('/users/new', methods=['GET'])
def new():
    query = "SELECT * FROM users"
    users = mysql.query_db(query)
    return render_template('newuser.html', friends=users)

@app.route('/users/<id>/edit', methods=['GET'])
def edit(id):
    query = "SELECT * FROM users WHERE id = :specific_id;"
    data = {'specific_id': id}
    users = mysql.query_db(query, data)
    return render_template('edit.html', friends=users[0])

@app.route('/users/<id>', methods=['GET'])
def show(id):
    query = "SELECT * FROM users WHERE id = :specific_id;"
    data = {'specific_id': id}
    users = mysql.query_db(query, data)
    return render_template('show.html', friends=users[0])

@app.route('/users/create', methods=['POST'])
def create():
    query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :email, NOW(), NOW());"
    data = {
             'first_name': request.form['first_name'],
             'last_name': request.form['last_name'],
             'email': request.form['email']
           }
    mysql.query_db(query, data)
    return redirect('/users/<id>')

@app.route('/users/<id>/destroy', methods=['POST'])
def destroy(id):
    email_id = request.form['delete']
    query = "DELETE FROM users WHERE id = :id; ALTER TABLE users AUTO_INCREMENT = 1;"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/users')

@app.route('/users/<id>', methods=['POST'])
def update(id):
    query = "UPDATE users SET first_name= :first_name, last_name= :last_name, email= :email, updated_at=NOW() WHERE id=:id;"
    data = {
             'first_name': request.form['first_name'],
             'last_name': request.form['last_name'],
             'email': request.form['email'],
             'id': id
           }
    mysql.query_db(query, data)
    return redirect('/users/'+ str(id))

@app.route('/back', methods=['POST'])
def back():
    return redirect('/users')

app.run(debug=True)
