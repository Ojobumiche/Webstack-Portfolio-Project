from django.urls import path
from django.contrib import admin
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    # path('login/', views.login_user, name= 'login'),
    path('logout/', views.logout_user, name='logout'),
    path('buy_ticket/', views.buy_ticket, name= 'buy_ticket'),
    path('api/login/', views.login, name='login'),
    path('home/', views.home, name= 'home'),
    path('register/', views.register, name='register'),

]
