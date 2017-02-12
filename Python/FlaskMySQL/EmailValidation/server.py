from flask import Flask, request, redirect, render_template, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
app.secret_key= "heythere"
mysql = MySQLConnector(app,'emails')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/emails/<email_id>')
def show(email_id):
    query = "SELECT * FROM emails WHERE id = :specific_id"
    data = {'specific_id': email_id}
    emails = mysql.query_db(query, data)
    return render_template('index.html', emails=emails[0])

@app.route('/success')
def show_all():
    query = "SELECT * FROM emails"
    emails = mysql.query_db(query)
    return render_template('index.html', emails=emails)

@app.route('/update_email/<email_id>', methods=['POST'])
def update(email_id):
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        return redirect('/')
    else:
        flash("Valid! Success!")
    query = "UPDATE emails SET email = :email WHERE id = :id;"
    data = {
             'email': request.form['email'],
             'id': email_id
           }
    mysql.query_db(query, data)
    return redirect('/success')

@app.route('/emails', methods=['POST'])
def create():
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        return redirect('/')
    else:
        flash("Valid! Success!")
    query = "INSERT INTO emails (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"
    data = {
             'email': request.form['email'],
           }
    mysql.query_db(query, data)
    return redirect('/success')

@app.route('/remove_email/<email_id>', methods=['POST'])
def delete(email_id):
    email_id = request.form['delete']
    query = "DELETE FROM emails WHERE id = :id; ALTER TABLE emails AUTO_INCREMENT = 1;"
    data = {'id': email_id}
    mysql.query_db(query, data)
    return redirect('/success')


app.run(debug=True)
