from django.contrib.auth.forms import UserCreationForm
from django import forms
from .models import User
from django.contrib.auth.forms import UserCreationForm



class RegisterCustomerForm(UserCreationForm):
    
    class Meta:
        model = User
        fields = ('username', 'email', 'is_customer', 'is_engineer')

