from rest_framework import serializers
from .models import Ticket


class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ('id', 'title', 'description', 'created_by', 'date_created', 'assign_to', 'ticket_status', 'is_resolve')
        
        