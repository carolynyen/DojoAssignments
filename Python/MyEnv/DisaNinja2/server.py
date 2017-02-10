from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def profile():
    return render_template("index.html")


@app.route('/ninja/<username>')
def show_ninja(username):
    return render_template("index2.html", username=username)


app.run(debug=True)
