from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^users$', views.show),
    url(r'^/en/(?P<id>\d+)$', views.index),
    url(r'^new_user$', views.create)
]
