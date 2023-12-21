from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.

class CustomUserAdmin(UserAdmin):
    fieldsets= (
        UserAdmin.fieldsets(
            'Custom Field Heading',
            {
                'fields'(
                    'is_cutomer',
                    'is_engineer'
                )
            }
        )
    )
