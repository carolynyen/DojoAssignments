# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 21:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dojosecrets', '0010_auto_20170223_2037'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='secret',
            name='likes',
        ),
        migrations.AddField(
            model_name='secret',
            name='likers',
            field=models.ManyToManyField(default=0, related_name='liked', to='dojosecrets.User'),
        ),
    ]
