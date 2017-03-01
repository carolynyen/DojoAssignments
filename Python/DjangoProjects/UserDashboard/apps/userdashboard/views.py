from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from django.db.models import Count
from django.core.urlresolvers import reverse
from ..loginreg.models import User

# Create your views here.
def index(request):
    request.session['success'] = False   #  resetting the logged in or registered person
    return redirect(reverse('loginreg:loginreg_index'))
