from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def profile():
    return render_template("index.html")

@app.route('/users/<username>')
def show_user_profile(username):
    return render_template("index.html", username=username)

@app.route('/route/with/<vararg>')
def handler_function(vararg):
  print vararg
  return redirect('/')

app.run(debug=True)
