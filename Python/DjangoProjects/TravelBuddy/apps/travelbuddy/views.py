from django.shortcuts import render, HttpResponse, redirect
from .models import User, Schedule
from django.contrib import messages

def index(request):
    request.session['success'] = False   #  resetting the logged in or registered person
    return render(request, 'travelbuddy/index.html')

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
        request.session['success'] = 'success'
    return redirect('/travels')

def travels(request):
    if ('userid' not in request.session) or ('success' not in request.session) or (request.session['success'] == False):
        messages.error(request, "Register or log in first.")
        return redirect('/')
    context = {'schedules': Schedule.objects.filter(scheduled_users__id= request.session['userid']), 'otherusers': Schedule.objects.all().exclude(scheduled_users__id= request.session['userid']), 'loggeduser': User.objects.filter(id=request.session['userid'])[0]}
    return render(request, 'travelbuddy/travels.html', context)

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
        request.session['success'] = 'success'
    return redirect('/travels')

def delete(request, scheduleid):
    if request.method == "GET":
        messages.error(request, "Nice try. Are you a hacker?")
        return redirect('/')
    Schedule.objects.filter(id=scheduleid).delete()
    return redirect('/travels')

def logout(request):
    if request.method == "GET":
        messages.error(request, "How can you log out without having logged in?")
        return redirect('/')
    request.session['success'] = False
    del request.session['userid']
    return redirect('/')

def gotodestination(request, scheduleid):
    if  ('userid' not in request.session) or ('success' not in request.session) or (request.session['success']==False):
        messages.error(request, "Register or log in first.")
        return redirect('/')
    context = {'schedule': Schedule.objects.filter(id = scheduleid)[0], 'otherusers': User.objects.filter(joined_schedules__id = scheduleid).exclude(id = (Schedule.objects.get(id=scheduleid).creator.id)), 'loggeduser': User.objects.filter(id=request.session['userid'])[0]}
    return render(request, 'travelbuddy/destination.html', context)

def addschedule(request):
    if request.method == "GET":
        messages.error(request, "What schedule?")
        return redirect('/')
    schedule = Schedule.objects.addschedule(request.POST, request.session['userid'])
    if 'errors' in schedule:
        error = schedule['errors']
        for one in error:
            messages.error(request, one)
        return redirect('/gotoaddplan')
    return redirect('/travels')

def jointrip(request, scheduleid):
    if request.method == "GET":
        messages.error(request, "What trip?")
        return redirect('/')
    schedule = Schedule.objects.jointrip(scheduleid, request.session['userid'])
    if 'errors' in schedule:
        messages.error(request, schedule['errors'])
    return redirect('/travels')

def gotoaddplan(request):
    if  ('userid' not in request.session) or ('success' not in request.session) or (request.session['success']==False):
        messages.error(request, "You aren't registered or logged in.")
        return redirect('/')
    return render(request, 'travelbuddy/addtrip.html')
