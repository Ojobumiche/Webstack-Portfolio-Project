from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register-customer/', views.register, name= 'register-customer'),
    path('login/', views.login_user, name= 'login'),
    path('logout/', views.logout_user, name='logout'),
     

]
