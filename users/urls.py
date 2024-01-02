from django.urls import path
from django.contrib import admin
from . import views
from users.views import login

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register-customer/', views.register, name= 'register-customer'),
    path('login/', views.login_user, name= 'login'),
    path('logout/', views.logout_user, name='logout'),
    path('buy_ticket/', views.buy_ticket, name= 'buy_ticket')
    path('api/login', login, name='login')

]
