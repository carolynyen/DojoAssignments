from flask import Flask, render_template, request, redirect
app = Flask(__name__)
app.secret_key= 'heythere'

@app.route('/')
def profile():
    return render_template("index.html")

@app.route('/ninja/')
def ninja():
    username = 'Images/tmnt.png'
    return render_template("index2.html", username=username)

@app.route('/ninja/<username>')
def show_ninja(username):
    if username == 'blue':
        username = 'Images/leonardo.jpg'
    elif username == 'orange':
        username = 'Images/michelangelo.jpg'
    elif username == 'red':
        username = 'Images/raphael.jpg'
    elif username == 'purple':
        username = 'Images/donatello.jpg'
    else:
        username = 'Images/notapril.jpg'
    return render_template("index2.html", username=username)


app.run(debug=True)
