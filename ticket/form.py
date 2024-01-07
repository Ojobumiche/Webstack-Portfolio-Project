from django import forms
from .models import Ticket



class CreateTicketForm(forms.ModelForm):
    class meta:
        model = Ticket
        field = ['title', 'description', 'ticket_number','created_date', 'created_by']
        

class UpdateTicketForm(forms.ModelForm):
    class meta:
        model = Ticket
        field = ['title', 'description']
        