from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .form import RegisterCustomerForm 
from rest_framework import viewsets
from .models import User
from .serializer import UserSerializer
from rest_framework import generics
from django.http import JsonResponse
import json
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


# Create viewsets base class
"""
The viewsets base class provides the 
implementation for CRUD operations
by default. This code specifies 
the serializer_class and the queryset.
"""
class Userview(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all() 

# ticket view
def buy_ticket(request):
    return render(request, 'buy_ticket.html')
    
    
       
# Registration view
def register(request):
    if request.method == 'POST':  
        form = RegisterCustomerForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_customer = True
            user.save()
            messages.info(request, 'Your account has been successfully registered. Please login to continue.')
            return redirect('login')
        else:
            messages.warning(request, 'Something went wrong. Please check form input.')
            return redirect('register-customer')
    else:
        form = RegisterCustomerForm()
        context = {'form': form}
        return render(request, 'users/register.html', context) 

# Login view
def login_view(request):
    # Check if the request method is POST
    if request.method == 'POST':
        try:
            username = request.POST.get('username')
            password = request.POST.get('password')
        except:
            # Authenticate user using Django's authenticate function
            user = authenticate(request, username=username, password=password)
            # Check if authentication is successful
            if user is not None and user.is_active:
                # Login the user using Django's login function
                login(request, user)
                messages.info(request, 'login successfully, please enjoy your session')
                # Redirect the user to the dashboard (replace 'dashboard' with your actual URL name)
                return redirect('dashboard')
            else:
                messages.warning(request, 'something went wrong, please check form input')
                return redirect('login')
        else:
            return render(request, 'users/login_view.html')

# Logout view
def logout_user(request):
    logout(request)
    messages.info(request, 'Your session has ended. Please log in to continue.')
    return redirect('login')

    