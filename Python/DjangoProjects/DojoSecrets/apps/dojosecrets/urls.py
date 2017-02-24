from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^register$', views.register),
    url(r'^login$', views.login),
    url(r'^success$', views.success),
    url(r'^delete/(?P<id>\d+)$', views.delete),
    url(r'^deletesecret/(?P<id>\d+)$', views.deletesecret),
    url(r'^logout$', views.logout),
    url(r'^postsecret$', views.addsecret),
    url(r'^popularsecrets$', views.showpopular),
    url(r'^like1/(?P<secretid>\d+)$', views.addlike1),
    url(r'^like2/(?P<secretid>\d+)$', views.addlike2),
    url(r'^.+$', views.index),
]
