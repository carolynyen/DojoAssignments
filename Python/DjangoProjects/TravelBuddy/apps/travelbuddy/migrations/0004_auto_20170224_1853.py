# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-24 18:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('travelbuddy', '0003_auto_20170224_1802'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='scheduled_users',
            field=models.ManyToManyField(default=0, related_name='joined_schedules', to='travelbuddy.User'),
        ),
    ]
