from flask import Flask, render_template, request, redirect, session
from datetime import datetime
import random
app = Flask(__name__)
app.secret_key = "heythere"

@app.route('/')
def index():
    if 'activities' not in session:
        session['activities'] = ''
    if 'goldcount' not in session:
        session['goldcount'] = 0
    return render_template("index.html")

@app.route('/process_money', methods=['POST'])
def results():
    if request.form['building'] == "cave":
        won = random.randrange(5,10)
        session['goldcount'] += won
        session['activities'] += 'You won ' + str(won) + ' gold at cave (' + str(datetime.now()) + ')\n'
    if request.form['building'] == "farm":
        won = random.randrange(10,20)
        session['goldcount'] += won
        session['activities'] += 'You won ' + str(won) + ' gold at farm (' + str(datetime.now()) + ')\n'
    if request.form['building'] == "house":
        won = random.randrange(2,5)
        session['goldcount'] += won
        session['activities'] += 'You won ' + str(won) + ' gold at house (' + str(datetime.now()) + ')\n'
    if request.form['building'] == "casino":
        won = random.randrange(0,50)
        num = random.randrange(1,3)
        if num == 1:
            session['goldcount'] += won
            session['activities'] += 'Entered a casino and won ' + str(won) + ' coins (' + str(datetime.now()) + ')\n'
        else:
            session['goldcount'] -= won
            session['activities'] += 'Entered a casino and lost ' + str(won) + ' coins..ouch... (' + str(datetime.now()) + ')\n'
    return redirect('/')

app.run(debug=True)
