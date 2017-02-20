from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^submit$', views.submit),
    url(r'^delete/(?P<id>\d+)$', views.delete),
    url(r'^comment/(?P<id>\d+)$', views.comment),
    url(r'^addcomment/(?P<id>\d+)$', views.addcomment),
    url(r'^deletecomment/(?P<id>\d+)/(?P<courseid>\d+)$', views.deletecomment),
    url(r'^delete/confirm/(?P<id>\d+)$', views.destroy),
]
