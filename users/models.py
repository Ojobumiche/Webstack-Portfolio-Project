from django.db import models
from django.contrib.auth.models import  AbstractUser

class User(AbstractUser):
    is_customer = models.BooleanField(default=False)
    is_engineer = models.BooleanField(default=False)

class UserProfile(models.Model):
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    
    
    
    
    
    def __str__(self):
    
        return self.username
