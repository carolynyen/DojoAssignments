from __future__ import unicode_literals
import re
from django.db import models
import bcrypt
from datetime import datetime
import datetime
Email_Regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
Name_Regex = re.compile(r'^[A-Za-z]+$')
Date_Regex = re.compile(r"^[0-9][0-9][0-9][0-9][\-][0-9][0-9][\-][0-9][0-9]")

class UserManager(models.Manager):

    def register(self, postData):
        status = True
        errorlist = []
        if postData['password'] != postData['confirm']:
            errorlist.append('Confirm Password does not match Password!')
            status = False
        if len(postData['first_name']) < 3:
            errorlist.append('First name must be more than 3 characters!')
            status = False
        elif not Name_Regex.match(postData['first_name']):
            errorlist.append('First name must be letters only.')
            status = False
        if len(postData['last_name']) < 3:
            errorlist.append('First name must be more than 3 characters!')
            status = False
        elif not Name_Regex.match(postData['last_name']):
            errorlist.append('Last name must be letters only.')
            status = False
        if len(postData['password']) < 1:
            errorlist.append('Must fill in a password!')
            status = False
        elif len(postData['password']) < 8:
            errorlist.append('Password must be more than 8 characters.')
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

class ScheduleManager(models.Manager):

    def addschedule(self, postData, userid):
        status = True
        errorlist = []
        if len(postData['destination']) < 1:
            errorlist.append('Nothing entered for Destination.')
            status = False
        if len(postData['description']) < 1:
            errorlist.append('Nothing entered for Description.')
            status = False
        if len(postData['travel_start_date']) < 1:
            errorlist.append('Nothing entered for Travel Date From.')
            status = False
        else:
            try:
                datetime.datetime.strptime(postData['travel_start_date'], '%Y-%m-%d')
            except ValueError:
                errorlist.append('Wrong format or invalid date! Please type in YEAR-MO-DA format, like 1993-05-12 for May 12, 1993.')
                status = False
            if postData['travel_start_date'] < datetime.datetime.now().strftime('%Y-%m-%d'):
                errorlist.append("Invalid date! That's the past!!")
                status = False
        if len(postData['travel_end_date']) < 1:
            errorlist.append('Nothing entered for Travel Date To.')
            status = False
        else:
            try:
                datetime.datetime.strptime(postData['travel_end_date'], '%Y-%m-%d')
            except ValueError:
                errorlist.append('Wrong format! Please type in YEAR-MO-DA format, like 1993-05-12 for May 12, 1993.')
                status = False
            if postData['travel_end_date'] < postData['travel_start_date']:
                errorlist.append("Invalid dates! Your end date is before your start date. How can you travel back in time?")
                status = False
        if status == False:
            return {'errors': errorlist}
        else:
            schedule = Schedule.objects.create(destination=postData['destination'], description=postData['description'], travel_start_date=postData['travel_start_date'], travel_end_date=postData['travel_end_date'], creator= User.objects.get(id=userid))
            Schedule.objects.jointrip(schedule.id, userid)
            return {}

    def jointrip(self, scheduleid, userid):
        if len(Schedule.objects.filter(id = scheduleid).filter(scheduled_users__id = userid)) > 0:
            return {'errors': 'You already joined this!!'}
        else:
            this_schedule = Schedule.objects.get(id = scheduleid)
            this_user = User.objects.get(id = userid)
            this_schedule.scheduled_users.add(this_user)
            return {}

class Schedule(models.Model):
      destination = models.CharField(max_length=100)
      description = models.CharField(max_length=200)
      travel_start_date = models.DateField(null=True, blank=True)
      travel_end_date = models.DateField(null=True, blank=True)
      creator = models.ForeignKey(User, default = 0)
      scheduled_users = models.ManyToManyField(User, related_name="joined_schedules", default = 0)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)
      objects = ScheduleManager()
