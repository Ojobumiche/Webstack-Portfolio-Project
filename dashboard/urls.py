from django.urls import path
from . import views


urlpatterns = [
    # path('', views.dashboard, name='dashboard'),
     path('accounts/users/login_view/dashboard/', views.dashboard, name='dashboard'),
]
    
