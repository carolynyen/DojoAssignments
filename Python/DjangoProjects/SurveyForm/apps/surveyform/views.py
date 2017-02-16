from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):

    return render(request, 'surveyform/index.html')

def show(request):
    return render(request, 'surveyform/showuser.html')

def create(request):
    if 'counter' not in request.session:
        request.session['counter'] = 1
    else:
        request.session['counter'] += 1
    request.session['name'] = request.POST['name']
    request.session['location'] = request.POST['location']
    request.session['language'] = request.POST['language']
    request.session['description'] = request.POST['description']
    return redirect('/result')

def back(request):
    return redirect('/')
