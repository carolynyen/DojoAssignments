from flask import Flask, render_template, redirect, request, session, flash
import re
import time
app = Flask(__name__)
app.secret_key = 'KeepItSecret'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
PW_REGEX = re.compile(r"(?=.*[A-Z])(?=.*\d)")
DATE_REGEX = re.compile(r"^[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]")

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/process', methods=['Post'])
def process():
    status = True
    if not DATE_REGEX.match(request.form['birthdate']):
        flash("Invalid birthdate! type in YEAR-MO-DA format")
        status = False
    if request.form['birthdate'] > time.strftime("%Y-%m-%d"):
        flash("Invalid birthdate! That's the future!!")
        status = False
    if len(request.form['birthdate']) < 1:
        flash("Birthdate can't be empty!")
        status = False
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
        status = False
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        status = False
    if len(request.form['firstname']) < 1:
         flash("First Name cannot be empty!")
         status = False
    if len(request.form['lastname']) < 1:
         flash("Last Name cannot be empty!")
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
        flash("Congrats on being valid!")
    return redirect('/')

app.run(debug=True)
