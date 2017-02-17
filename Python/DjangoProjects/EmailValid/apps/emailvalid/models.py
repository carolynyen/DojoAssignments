from __future__ import unicode_literals
import re
from django.db import models
Email_Regex = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# Create your models here.
class EmailManager(models.Manager):
    def register(self, postEmail):
        if len(postEmail) < 1:
            return {'errors':'Must fill in Email!'}
        if not Email_Regex.match(postEmail):
            return {'errors':'Email not valid!'}
        if len(Email.emailManager.filter(email = postEmail)) > 0:
            return {'errors': 'Email already registered!'}
        return {'email': postEmail}

class Email(models.Model):
      email = models.CharField(max_length=100)
      created_at = models.DateTimeField(auto_now_add = True)
      updated_at = models.DateTimeField(auto_now = True)
      emailManager = EmailManager()
