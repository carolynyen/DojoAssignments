from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'vinmyMVC/index.html')

def show(request):
    print (request.method)
    return render(request, 'vinmyMVC/showusers.html')

def create(request):
    if request.method == "POST":
        request.session['name'] = request.POST['first_name']
        return redirect('/')
    else:
        return redirect('/')
#
# del request.session['key']
