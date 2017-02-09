from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = "heythere"

@app.route('/')
def index():
    if 'num' not in session:
        session['num'] = random.randrange(0,101)
    if 'guess' not in session:
        answer= ""
    else:
        if str(session['guess']) == str(session['num']):
            answer = "You are right!!! " + str(session['num']) + " is the number!"
            session.pop('num')
            session.pop('guess')
            return render_template("results.html", answer=answer)
        else:
            if int(session['guess']) < int(session['num']):
                answer = "You are too low."
            else:
                answer = "You are too high."
            session.pop('guess')
    return render_template("index.html", answer=answer)

@app.route('/results', methods=['POST'])
def results():
    session['guess'] = request.form['guess']
    return redirect('/')

@app.route('/index2', methods=['POST'])
def index2():
    return redirect('/')

app.run(debug=True)
