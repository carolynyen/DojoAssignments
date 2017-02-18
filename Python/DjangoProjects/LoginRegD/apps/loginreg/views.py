from django.shortcuts import render, HttpResponse, redirect
from .models import User

# Create your views here.
def index(request):
    if 'counter' not in request.session:
        request.session['counter'] = 0
    request.session['counter'] += 1
    if request.session['counter'] == 2:
        del request.session['error']
    request.session['success'] = False
    return render(request, 'loginreg/index.html')

def register(request):
    if request.method == "GET":
        return redirect('/')
    request.session['counter'] = 0
    if 'error' in request.session:
        del request.session['error']
    user = User.userManager.register(request.POST['first_name'], request.POST['last_name'], request.POST['email'], request.POST['password'], request.POST['confirm'])
    if 'errors' in user:
        error = user['errors']
        print HttpResponse(error)
        request.session['error'] = error
        return redirect('/')
    if user['register'] == True:
        User.userManager.create(first_name= user['first_name'], last_name= user['last_name'], email = user['email'], password = user['password'])
        success = 'The email address you entered (' + user['email'] + ') is a VALID email address! Thank you!'
        user = User.userManager.filter(email = user['email'])
        request.session['userid'] = user[0].id
        request.session['success'] = 'registered'
    return redirect('/success')

def success(request):
    if 'userid' not in request.session:
        return redirect('/')
    context = {'user': User.userManager.all()}
    return render(request, 'loginreg/success.html', context)

def login(request):
    if request.method == "GET":
        return redirect('/')
    if 'error' in request.session:
        del request.session['error']
    user = User.userManager.login(request.POST['email'], request.POST['password'])
    user = Users.userManager.filter(email = request.POST['email'])
    request.session['userid'] = user[0].id
    return redirect('/success')

def delete(request, id):
    if request.method == "GET":
        return redirect('/')
    User.userManager.filter(id=id).delete()
    return redirect('/success')

def logout(request):
    if request.method == "GET":
        return redirect('/')
    request.session['success'] = False
    del request.session['userid']
    return redirect('/')
