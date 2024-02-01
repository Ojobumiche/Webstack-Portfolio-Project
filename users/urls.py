from django.urls import path
from django.contrib import admin
from . import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/login_view/', views.login_view, name= 'login_view'),
    path('logout/', views.logout_user, name='logout'),
    path('buy_ticket/', views.buy_ticket, name= 'buy_ticket'),
    # path('api/login/', views.login, name='login'),
    path('register/', views.register, name='register'),

]
