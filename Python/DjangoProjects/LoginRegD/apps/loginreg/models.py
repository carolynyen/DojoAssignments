from __future__ import unicode_literals
import re
from django.db import models
import bcrypt
Email_Regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')


# Create your models here.

class UserManager(models.Manager):

    def register(self, postFirstName, postLastName, postEmail, postPassword, postConfirm):
        if postPassword != postConfirm:
            return {'errors':'Confirm Password does not match Password!'}
        if len(postEmail) < 1:
            return {'errors':'Must fill in Email!'}
        if not Email_Regex.match(postEmail):
            return {'errors':'Email not valid!'}
        if len(User.userManager.filter(email = postEmail)) > 0:
            return {'errors': 'Email already registered!'}
        password = postPassword
        hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
        return {'register': True, 'first_name': postFirstName, 'last_name': postLastName, 'email': postEmail,'password': hashed}

    def login(self, postEmail, postPassword):
        user = User.userManager.filter(email = postEmail)
        if len(user) == 1:
            if bcrypt.check_password_hash(user[0]['password'], postpassword):
                return {'login': True}
            else:
                return {'errors':'Password does not match email!'}
        else:
            return {'errors':'Email not registered!'}


class User(models.Model):
      first_name = models.CharField(max_length=100)
      last_name = models.CharField(max_length=100)
      email = models.CharField(max_length=100)
      password = models.CharField(max_length=200)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)
      userManager = UserManager()
