from django import forms
from .models import Ticket



class CreateTicketForm(forms.ModelForm):
    class meta:
        model = Ticket
        field = ['title', 'description']
        

class UpdateTicketForm(forms.ModelForm):
    class meta:
        model = Ticket
        field = ['title', 'description']
        