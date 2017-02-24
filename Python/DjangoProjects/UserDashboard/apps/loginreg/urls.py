from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "loginreg_index"),
    url(r'^register$', views.register, name="loginreg_register"),
    url(r'^login$', views.login, name="loginreg_login"),
    url(r'^success$', views.success),
    url(r'^delete/(?P<id>\d+)$', views.delete),
    url(r'^logout$', views.logout),
    url(r'^.+$', views.index),
]
