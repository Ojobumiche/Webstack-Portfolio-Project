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
@csrf_exempt  # Use this decorator to allow POST requests without CSRF token (for demonstration purposes only)
def login(request):
    # Check if the request method is POST
    if request.method == 'POST':
        try:
            # Decode the JSON data from the request body
            data = json.loads(request.body.decode('utf-8'))
            # Extract username and password from the JSON data
            username = data.get('username')
            password = data.get('password')
        except json.JSONDecodeError:
            # Return error response if JSON decoding fails
            return JsonResponse({'error': 'Invalid JSON data in the request body'}, status=400)

        # Check if both username and password are provided
        if username and password:
            # Authenticate user using Django's authenticate function
            user = authenticate(request, username=username, password=password)

            # Check if authentication is successful
            if user is not None:
                # Login the user using Django's login function
                login(request, user)
                # Redirect the user to the dashboard (replace 'dashboard' with your actual URL name)
                return redirect('dashboard')
            else:
                # Return error response if authentication fails
                return JsonResponse({'error': 'Invalid username or password'}, status=400)
        else:
            # Return error response if username or password is missing
            return JsonResponse({'error': 'Username and password are required fields'}, status=400)
    else:
        # Return error response if the request method is not POST
        return JsonResponse({'error': 'Invalid request method'}, status=400)


# Logout view
def logout_user(request):
    logout(request)
    messages.info(request, 'Your session has ended. Please log in to continue.')
    return redirect('login')

    