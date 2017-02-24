from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^travels$', views.travels),
    url(r'^delete/(?P<scheduleid>\d+)$', views.delete),
    url(r'^logout$', views.logout),
    url(r'^gotodestination/(?P<scheduleid>\d+)$', views.gotodestination),
    url(r'^jointrip/(?P<scheduleid>\d+)$', views.jointrip),
    url(r'^addschedule$', views.addschedule),
    url(r'^gotoaddplan$', views.gotoaddplan),
    url(r'^.+$', views.index),
]
