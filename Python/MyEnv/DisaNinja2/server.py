from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key= 'heythere'

@app.route('/')
def profile():
    return render_template("index.html")

@app.route('/ninja/')
def ninja():
    session['color'] = 'Images/tmnt.png'
    return render_template("index2.html")

@app.route('/ninja/<username>')
def show_ninja(username):
    if username == 'blue':
        session['color'] = 'Images/leonardo.jpg'
    elif username == 'orange':
        session['color'] = 'Images/michelangelo.jpg'
    elif username == 'red':
        session['color'] = 'Images/raphael.jpg'
    elif username == 'purple':
        session['color'] = 'Images/donatello.jpg'
    else:
        session['color'] = 'Images/notapril.jpg'
    return render_template("index2.html")


app.run(debug=True)
