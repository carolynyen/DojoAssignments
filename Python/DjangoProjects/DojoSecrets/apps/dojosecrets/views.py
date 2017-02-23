from django.shortcuts import render, HttpResponse, redirect
from .models import User, Secret
from django.contrib import messages
from django.db.models import F
from django.db.models import Count

# Create your views here.
def index(request):
    request.session['success'] = False   #  resetting the logged in or registered person
    return render(request, 'dojosecrets/index.html')

def register(request):
    if request.method == "GET":
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
        request.session['success'] = True
    return redirect('/success')

def success(request):
    if 'success' not in request.session or request.session['success'] == False:
        return redirect('/')
    if 'userid' not in request.session:
        return redirect('/')
    user = Secret.objects.annotate(num_likes=Count('likers')).order_by('-id')
    context = {'user': user[:5], 'loggeduser': User.objects.filter(id=request.session['userid'])[0]}
    return render(request, 'dojosecrets/recentsecrets.html', context)

def login(request):
    if request.method == "GET":
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
        request.session['success'] = True
    return redirect('/success')

def delete(request, id):
    if request.method == "GET":
        return redirect('/')
    User.objects.filter(id=id).delete()
    return redirect('/success')

def deletesecret(request, id):
    if request.method == "GET":
        return redirect('/')
    Secret.objects.filter(id=id).delete()
    return redirect('/success')

def addsecret(request):
    if request.method == "GET":
        return redirect('/')
    secret = Secret.objects.validate(request.POST)
    if 'errors' in secret:
        error = secret['errors']
        for one in error:
            messages.error(request, one)
            return redirect('/success')
    else:
        Secret.objects.create(content=request.POST['secret'], creator= User.objects.get(id=request.session['userid']))
        return redirect('/success')

def showpopular(request):
    if 'success' not in request.session or request.session['success'] == False :
        return redirect('/')
    if 'userid' not in request.session:
        return redirect('/')
    user = Secret.objects.annotate(num_likes=Count('likers')).order_by('-num_likes')
    context = {'user': user[:10], 'loggeduser': User.objects.filter(id=request.session['userid'])[0]}
    return render(request, 'dojosecrets/popularsecrets.html', context)

def addlike1(request, secretid, userid):
    if request.method == "GET":
        return redirect('/')
    secret = Secret.objects.addlike(secretid, userid)
    if 'errors' in secret:
        messages.error(request, secret['errors'])
        return redirect('/success')
    return redirect('/success')

def addlike2(request, secretid, userid):
    if request.method == "GET":
        return redirect('/')
    secret = Secret.objects.addlike(secretid, userid)
    if 'errors' in secret:
        messages.error(request, secret['errors'])
        return redirect('/popularsecrets')
    return redirect('/popularsecrets')

def logout(request):
    if request.method == "GET":
        return redirect('/')
    request.session['success'] = False
    del request.session['userid']
    return redirect('/')
