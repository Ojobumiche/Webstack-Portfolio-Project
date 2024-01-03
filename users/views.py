from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from .form import RegisterCustomerForm 
from rest_framework import viewsets
from .models import User
from .serializer import UserSerializer
from rest_framework import generics
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from.models import UserProfile
import json


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
            return redirect('register_customer')
    else:
        form = RegisterCustomerForm()
        context = {'form': form}
        return render(request, 'users/register_customer.html', context) 

# Login view
@csrf_exempt
def login(request):
    if request.method == 'POST': 
        data = json.loads(request.body)
        
        username = data.POST.get('username')
        password = data.POST.get('password')
        user_exist = UserProfile.objects.filter(username=username, password=password)
        if user_exist:
            return JsonResponse({'success': True})
        else:
            return JsonResponse({'success': False, 'message': 'Invalid credentials'})
    

        # user= authenticate(request, username=username, password=password).exists()
        # if user is not None and user.is_active:
        #     login(request, user)
        #     messages.info(request, 'Login successful. Please enjoy your session.')
        #     return redirect('dashboard')
        #     else:
        # messages.warning(request, 'Something went wrong. Please check your form input.')
            # return redirect('login')
    else:
        return render(request, 'users/login.html')

# Logout view
def logout_user(request):
    logout(request)
    messages.info(request, 'Your session has ended. Please log in to continue.')
    return redirect('login')
