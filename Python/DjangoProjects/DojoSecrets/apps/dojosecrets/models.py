from __future__ import unicode_literals
import re
from django.db import models
from django.contrib import messages
import bcrypt
Email_Regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
Name_Regex = re.compile(r'^[A-Za-z]+$')

# Create your models here.

class UserManager(models.Manager):

    def register(self, postData):
        status = True
        errorlist = []
        if postData['password'] != postData['confirm']:
            errorlist.append('Confirm Password does not match Password!')
            status = False
        if len(postData['first_name']) < 2:
            errorlist.append('First name must be more than 2 characters!')
            status = False
        elif not Name_Regex.match(postData['first_name']):
            errorlist.append('First name must be letters only.')
            status = False
        if len(postData['last_name']) < 2:
            errorlist.append('First name must be more than 2 characters!')
            status = False
        elif not Name_Regex.match(postData['last_name']):
            errorlist.append('Last name must be letters only.')
            status = False
        if len(postData['password']) < 1:
            errorlist.append('Must fill in a password!')
            status = False
        elif len(postData['password']) < 8:
            errorlist.append('Password must be at least 8 characters.')
            status = False
        if len(postData['email']) < 1:
            errorlist.append('Must fill in Email!')
            status = False
        elif not Email_Regex.match(postData['email']):
            errorlist.append('Email not valid! Needs to be <name>@<host>.com format.')
            status = False
        if len(postData['confirm']) < 1:
            errorlist.append('Must fill in a password confirmation!')
            status = False
        if len(User.objects.filter(email = postData['email'])) > 0:
            errorlist.append('Email already registered!')
            status = False
        if status == False:
            return {'errors': errorlist}
        else:
            password = postData['password']
            hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
            User.objects.create(first_name= postData['first_name'], last_name= postData['last_name'], email = postData['email'], password = hashed)
            return {'register': True}

    def login(self, postData):
        status = True
        errorlist = []
        user = User.objects.filter(email = postData['email'])
        if len(postData['email']) < 1:
            errorlist.append('Must fill in Email!')
            status = False
        if len(postData['password']) < 1:
            errorlist.append('Must fill in Password!')
            status = False
        else:
            if len(user) < 1:
                errorlist.append('Email not registered!')
                status = False
        if status == False:
            return {'errors': errorlist}
        else:
            if bcrypt.hashpw(postData['password'].encode(), user[0].password.encode()) == user[0].password:
                return {'login': True}
            else:
                status = False
                errorlist.append('Password does not match email!')
                return {'errors': errorlist}

class User(models.Model):
      first_name = models.CharField(max_length=100)
      last_name = models.CharField(max_length=100)
      email = models.CharField(max_length=100)
      password = models.CharField(max_length=200)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)
      objects = UserManager()


class SecretManager(models.Manager):
    def validate(self, postData):
        errorlist = []
        status = True
        if len(postData['secret']) < 1:
            errorlist.append('nothing in secret box')
            status = False
        if status == False:
            return {'errors': errorlist}
        else:
            return {}
    def addlike(self, secretid, userid):
        if len(Secret.objects.filter(id = secretid).filter(likers__id = userid)) > 0:
            return {'errors': 'You already liked this!!'}
        else:
            this_secret = Secret.objects.get(id = secretid)
            this_user = User.objects.get(id = userid)
            this_secret.likers.add(this_user)
            return {}

class Secret(models.Model):
      content = models.CharField(max_length=1000)
      creator = models.ForeignKey(User, related_name="users")
      likers = models.ManyToManyField(User, related_name="liked", default = 0)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)
      objects = SecretManager()
