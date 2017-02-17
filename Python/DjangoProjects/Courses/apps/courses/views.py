from django.shortcuts import render, redirect, HttpResponse
from .models import Course
import re

# Create your views here.
def index(request):
    context = {'courses': Course.objects.all()}
    return render(request, 'courses/index.html', context)

def process(request):
    if request.method == "GET":
        return redirect('/')
    check = Course.objects.filter(name = request.POST['name'])
    if len(check) > 0:
        redirect('/')
    Course.objects.create(name=request.POST['name'], description=request.POST['description'])
    return redirect('/')

def delete(request, id):
    context = {'courses': Course.objects.filter(id=id)}
    return render(request, 'courses/delete.html', context)

def dodelete(request, id):
    Course.objects.filter(id=id).delete()
    return redirect('/')
