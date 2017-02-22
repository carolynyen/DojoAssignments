from django.shortcuts import render, HttpResponse, redirect
from .models import User, Interest
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'manytomany/index.html')

def register(request):
    if request.method == "GET":
        return redirect('/')
    user = User.objects.validate(request.POST)
    if 'errors' in user:
        error = user['errors']
        for one in error:
            messages.error(request, one)
    return redirect('/')

def show(request, id):
    context ={"user": User.objects.filter(id = id)}
    return render(request, 'manytomany/interests.html', context)

def sameinterest(request, id):
    if request.method == "GET":
        return redirect('/')
    request.session['interest_id'] = id
    return redirect('/sameinterest')

def showme(request):
    if 'interest_id' not in request.session:
        return redirect('/')
    context ={"user": Interest.objects.filter(id = request.session['interest_id'])}
    return render(request, 'manytomany/sameinterest.html', context)

def viewpeople(request):
    context ={"user": User.objects.all()}
    return render(request, 'manytomany/users.html', context)

def delete(request, id):
    if request.method == "GET":
        return redirect('/')
    User.objects.filter(id=id).delete()
    return redirect('/viewpeople')
