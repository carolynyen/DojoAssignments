from django.shortcuts import render
from datetime import datetime


# Create your views here.
def index(request):
    date = datetime.now()
    context = {
    "somekey": date
    }
    return render(request, 'timedisplay/index.html', context)
