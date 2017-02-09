from flask import Flask, render_template, redirect, request, session, flash
app = Flask(__name__)
app.secret_key = 'KeepItSecret'

@app.route('/')
def index():
  return render_template('index.html')


@app.route('/process', methods=['Post'])
def process():
    if len(request.form['name']) < 1:
         flash("Name cannot be empty!")
         return redirect('/')
    if len(request.form['description']) < 1:
         flash("Comment cannot be empty!")
         return redirect('/')
    if len(request.form['description']) > 120:
         flash("Comment can't be over 120 characters!")
         return redirect('/')
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    description = request.form['description']
    return render_template("results.html", name=name, location=location, language=language, description=description)

app.run(debug=True)
