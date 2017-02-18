from django.shortcuts import render, HttpResponse, redirect
from .models import Email
import re
Email_Regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your views here.
def index(request):
    if 'counter' not in request.session:
        request.session['counter'] = 0
    request.session['counter'] += 1
    if request.session['counter'] == 2:
        if 'error' in request.session:
            del request.session['error']
    return render(request, 'emailvalid/index.html')

def register(request):
    request.session['counter'] = 0
    if 'error' in request.session:
        del request.session['error']
    if request.method == "GET":
        return redirect('/')
    user = Email.emailManager.register(request.POST['email'])
    if 'errors' in user:
        error = user['errors']
        print HttpResponse(error)
        request.session['error'] = error
        return redirect('/')
    if 'email' in user:
        Email.emailManager.create(email = user['email'])
        request.session['success'] = 'The email address you entered (' + user['email'] + ') is a VALID email address! Thank you!'
    return redirect('/success')

def success(request):
    context = {'emails': Email.emailManager.all()}
    return render(request, 'emailvalid/success.html', context)

def delete(request, id):
    if request.method == "GET":
        return redirect('/')
    if 'success' in request.session:
        del request.session['success']
    Email.emailManager.filter(id=id).delete()
    return redirect('/success')

def goback(request):
    if request.method == "GET":
        return redirect('/')
    if 'success' in request.session:
        del request.session['success']
    return redirect('/')
