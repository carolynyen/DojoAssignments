from django.shortcuts import render, redirect, HttpResponse
import random, string
from random import randint
from datetime import datetime

# Create your views here.
def index(request):
    if 'counter' not in request.session:
        request.session['counter'] = 0
    if 'random' not in request.session:
        request.session['random'] = 'Not Yet Generated Number'
    return render(request, 'randomword/index.html')

def generate(request):
    if 'random' not in request.session:
        request.session['random'] = 'Not Yet Generated Number'
    else:
        randomstr = ''.join(random.choice(string.ascii_uppercase + string.digits) for i in range(14))
        request.session['random'] = randomstr
    if 'counter' not in request.session:
        request.session['counter'] = 1
    else:
        request.session['counter'] += 1
    return redirect('/')
