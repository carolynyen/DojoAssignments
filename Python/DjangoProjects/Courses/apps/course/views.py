from django.shortcuts import render, redirect
from .models import Course, Comment

# Create your views here.
def index(request):
    context = {"courses": Course.objects.all()}
    return render(request, 'course/index.html', context)

def submit(request):
    if request.method == 'POST':
        if len(request.POST['name']) < 1:
            return redirect('/')
        Course.objects.create(name=request.POST["name"], description=request.POST["description"])
        return redirect('/')
    elif request.method == 'GET':
        return redirect('/')

def delete(request, id):
    context = {"target": Course.objects.filter(id=id)[0]}
    return render(request, 'course/delete.html', context)

def comment(request, id):
    context = {"comments": Comment.objects.filter(course=id), "course": Course.objects.filter(id=id)[0]}
    return render(request, 'course/comment.html', context)

def addcomment(request, id):
    if request.method == 'POST':
        if len(request.POST['comment']) < 1:
            return redirect('/')
        Comment.objects.create(content=request.POST["comment"], course=Course.objects.filter(id=id)[0])
        return redirect('/comment/' + id)
    elif request.method == 'GET':
        return redirect('/')

def deletecomment(request, id, courseid):
    if request.method == 'POST':
        Comment.objects.filter(id=id).delete()
    return redirect('/comment/' + courseid)

def destroy(request, id):
    if request.method == 'POST':
        Course.objects.filter(id=id).delete()
    return redirect('/')
