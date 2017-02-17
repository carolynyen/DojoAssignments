from django.shortcuts import render, redirect, HttpResponse
from .models import User, Message, Comment
# Create your views here.
def index(request):
    return render(request, 'wallerd/index.html')

def show(request):
    context = {'messages': Message.objects.all()}
    return render(request, 'wallerd/results.html', context)

def create(request):
    return redirect('/')


def indexdata(request):
      print(User.objects.all())
      # A list of objects (or an empty list)
      User.objects.create(first_name=request.POST['first_name'],last_name="mike",password="1234asdf")
      # Creates a user object
      print(User.objects.all())
      # A list of objects (or an empty list)
      u = User.objects.get(id=1)
      print(u.first_name)
      u.first_name = "Joey"
      u.save()
      j = User.objects.get(id=1)
      print(j.first_name)
      # Gets the user with an id of 1, changes name and saves to DB, then retrieves again...
      print(User.objects.get(first_name="mike"))
      user = User.objects.filter(last_name="Thomas")
      user = User.objects.filter(first_name__startswith="S")
      user = Message.objects.filter(message_id__gt=2) #greater than two, gte for or equal to
      user = User.objects.filter(last_name__contains="o").exclude(first_name__contains="o")
      user = Comment.objects.filter(message_id__lt=7)|Comment.objects.filter(content__startswith="S")
      # Gets the user with a first_name of 'mike' *** THIS MIGHT NEED TO BE CHANGED ***
      users = User.objects.raw("SELECT * from my_app_name_user")
      # Uses raw SQL query to grab all users (equivalent to User.objects.all()), which we iterate through below
      for user in users:
        print user.first_name
      print User._meta.db_table
      return HttpResponse("ok")

        #  {% for comment in blog.comment_set.all() %}
        #  {{comment.comment}}
        #  {% endfor %}
        #  to link foreign keys in either direction, linking one object blog and one comment link all parts
