from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.user_comment),
    path('all/', views.show_comments),
]