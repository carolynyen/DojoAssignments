# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-28 19:02
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('talktome', '0004_user_room'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='message_room',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='messages', to='talktome.Room'),
        ),
    ]