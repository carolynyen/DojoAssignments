from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^go_back$', views.back),
    url(r'^result$', views.show),
    url(r'^create_user$', views.create)
]
