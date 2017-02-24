from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from django.db.models import Count

# Create your views here.
def index(request):
    request.session['success'] = False   #  resetting the logged in or registered person
    return render(request, 'loginreg:loginreg_index')
