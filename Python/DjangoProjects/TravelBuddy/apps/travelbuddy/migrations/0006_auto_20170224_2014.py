# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-24 20:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('travelbuddy', '0005_auto_20170224_1914'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='travel_end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='schedule',
            name='travel_start_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
