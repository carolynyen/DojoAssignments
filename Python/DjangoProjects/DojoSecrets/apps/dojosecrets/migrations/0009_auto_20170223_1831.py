# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 18:31
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dojosecrets', '0008_auto_20170223_0708'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='secret',
            name='likeduser',
        ),
        migrations.AddField(
            model_name='secret',
            name='likeduser',
            field=models.ManyToManyField(default=0, related_name='likedusers', to='dojosecrets.User'),
        ),
    ]
