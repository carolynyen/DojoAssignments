from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process$', views.process),
    url(r'^delete/(?P<name>\w+)$', views.delete),
    url(r'^dontdelete$', views.index),
    url(r'^dodelete/(?P<name>\w+)$', views.dodelete),
]
