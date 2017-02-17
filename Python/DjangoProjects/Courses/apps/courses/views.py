from django.shortcuts import render, redirect, HttpResponse
from .models import Course
# Create your views here.
def index(request):
    context = {'courses': Course.objects.all()}
    return render(request, 'courses/index.html', context)

def process(request):
    check = Course.objects.filter(name = request.POST['name'])
    if len(check) > 0:
        redirect('/')
    Course.objects.create(name=request.POST['name'], description=request.POST['description'])
    return redirect('/')

def delete(request, name):
    context = {'courses': Course.objects.filter(name=name)}
    return render(request, 'courses/delete.html', context)

def dodelete(request, name):
    Course.objects.filter(name=name).delete()
    return redirect('/')
