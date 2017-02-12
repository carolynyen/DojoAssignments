from flask import Flask, request, redirect, render_template
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key= "heythere"
mysql = MySQLConnector(app,'friends')


@app.route('/')
def index():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    return render_template('index.html', friends=friends)

@app.route('/friends', methods=['POST'])
def create():
    query = "INSERT INTO friends (first_name, last_name, email, created_at, updated_at) VALUES (:first_name, :last_name, :email, NOW(), NOW());"
    data = {
             'first_name': request.form['first_name'],
             'last_name': request.form['last_name'],
             'email': request.form['email']
           }
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<id>/edit', methods=['GET'])
def edit(id):
    query = "SELECT * FROM friends WHERE id = :specific_id;"
    data = {'specific_id': id}
    friends = mysql.query_db(query, data)
    return render_template('edit.html', friends=friends[0])

@app.route('/friends/<id>', methods=['POST'])
def update(id):
    query = "UPDATE `friends`.`friends` SET `first_name`=:first_name, `last_name`=:last_name, `email`=:email, `updated_at`= NOW() WHERE `id`=:id;"
    data = {
             'first_name': request.form['first_name'],
             'last_name': request.form['last_name'],
             'email': request.form['email'],
             'id': id
           }
    print data
    mysql.query_db(query, data)
    return redirect('/')

@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):
    email_id = request.form['delete']
    query = "DELETE FROM friends WHERE id = :id; ALTER TABLE friends AUTO_INCREMENT = 1;"
    data = {'id': id}
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
