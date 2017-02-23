from django.shortcuts import render, HttpResponse, redirect
from .models import User
from django.contrib import messages

# Create your views here.
def index(request):
    request.session['success'] = False   #  resetting the logged in or registered person
    return render(request, 'loginreg/index.html')

def register(request):
    if request.method == "GET":
        messages.error(request, "Nice try. Register first.")
        return redirect('/')
    user = User.objects.register(request.POST)
    if 'errors' in user:
        error = user['errors']
        for one in error:
            messages.error(request, one)
        return redirect('/')
    if user['register'] == True:
        user = User.objects.filter(email = request.POST['email'])
        request.session['userid'] = user[0].id
        request.session['success'] = 'registered'
    return redirect('/success')

def success(request):
    if (request.session['success'] == False) or ('userid' not in request.session) or ('success' not in request.session):
        messages.error(request, "Register or log in first.")
        return redirect('/')
    context = {'user': User.objects.all(), 'loggeduser': User.objects.filter(id=request.session['userid'])[0]}
    return render(request, 'loginreg/success.html', context)

def login(request):
    if request.method == "GET":
        messages.error(request, "Nice try. Log in first.")
        return redirect('/')
    user = User.objects.login(request.POST)
    if 'errors' in user:
        error = user['errors']
        for one in error:
            messages.error(request, one)
        return redirect('/')
    if user['login'] == True:
        user = User.objects.filter(email = request.POST['email'])
        request.session['userid'] = user[0].id
        request.session['success'] = 'loggedin'
    return redirect('/success')

def delete(request, id):
    if request.method == "GET":
        messages.error(request, "Nice try. Are you a hacker?")
        return redirect('/')
    User.objects.filter(id=id).delete()
    return redirect('/success')

def logout(request):
    if request.method == "GET":
        messages.error(request, "How can you log out without having logged in?")
        return redirect('/')
    request.session['success'] = False
    del request.session['userid']
    return redirect('/')
