# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-23 07:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dojosecrets', '0006_auto_20170223_0708'),
    ]

    operations = [
        migrations.AlterField(
            model_name='secret',
            name='likeduser',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likedusers', to='dojosecrets.User'),
        ),
    ]
