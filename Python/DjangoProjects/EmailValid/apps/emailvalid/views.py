from django.shortcuts import render, HttpResponse, redirect, render_to_response
from .models import Email
import re
Email_Regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your views here.
def index(request):
    return render(request, 'emailvalid/index.html')

def register(request):
    success = ''
    if request.method == "GET":
        return redirect('/')
    user = Email.emailManager.register(request.POST['email'])
    if 'errors' in user:
        error = user['errors']
        print HttpResponse(error)
        context = {'error': error}
        return render(request, 'emailvalid/index.html', context)
    if 'email' in user:
        Email.emailManager.create(email = user['email'])
        success = 'The email address you entered (' + user['email'] + ') is a VALID email address! Thank you!'
    context = {'emails': Email.emailManager.all(), 'success': success}
    return render(request, 'emailvalid/success.html', context)

def success(request):
    context = {'emails': Email.emailManager.all()}
    return render(request, 'emailvalid/success.html', context)

def delete(request, id):
    Email.emailManager.filter(id=id).delete()
    return redirect('/success')
