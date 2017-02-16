from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'disaninja/index.html')

def show(request, color):
    if color == 'blue':
        context = {'color': 'disaninja/img/leonardo.jpg'}
    elif color == 'red':
        context = {'color': 'disaninja/img/raphael.jpg'}
    elif color == 'orange':
        context = {'color': 'disaninja/img/michelangelo.jpg'}
    elif color == 'purple':
        context = {'color': 'disaninja/img/donatello.jpg'}
    else:
        context = {'color': 'disaninja/img/notapril.jpg'}
    return render(request, 'disaninja/ninjas.html', context)

def showone(request):
    context = {'color': 'disaninja/img/tmnt.png'}
    return render(request, 'disaninja/ninjas.html', context)
