from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "heythere"

@app.route('/')
def index():
  if 'counter' not in session:
      session['counter'] = 1
  else:
      session['counter']+=1
  return render_template("index.html")



app.run(debug=True)
