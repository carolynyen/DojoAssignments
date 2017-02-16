from django.shortcuts import render, redirect, HttpResponse
from datetime import datetime
import random

# Create your views here.
def index(request):
    if 'activities' not in request.session:
        request.session['activities'] = ''
    if 'goldcount' not in request.session:
        request.session['goldcount'] = 0
    return render(request, 'ninjagold/index.html')

def results(request, building):
    if building == "cave":
        won = random.randrange(5,10)
        request.session['goldcount'] += won
        request.session['activities'] += 'You won ' + str(won) + ' gold at cave (' + str(datetime.now()) + ')\n'
    if building == "farm":
        won = random.randrange(10,20)
        request.session['goldcount'] += won
        request.session['activities'] += 'You won ' + str(won) + ' gold at farm (' + str(datetime.now()) + ')\n'
    if building == "house":
        won = random.randrange(2,5)
        request.session['goldcount'] += won
        request.session['activities'] += 'You won ' + str(won) + ' gold at house (' + str(datetime.now()) + ')\n'
    if building == "casino":
        won = random.randrange(0,50)
        num = random.randrange(1,3)
        if num == 1:
            request.session['goldcount'] += won
            request.session['activities'] += 'Entered a casino and won ' + str(won) + ' coins (' + str(datetime.now()) + ')\n'
        else:
            request.session['goldcount'] -= won
            request.session['activities'] += 'Entered a casino and lost ' + str(won) + ' coins..ouch... (' + str(datetime.now()) + ')\n'
    return redirect('/')
