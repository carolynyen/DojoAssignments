from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def profile():
    return render_template("index.html", username="No")

@app.route('/ninja')
def ninjas():
    return render_template("index.html", username="ninjas")

@app.route('/ninja/<username>')
def show_ninja(username):
    return render_template("index.html", username=username)


app.run(debug=True)
