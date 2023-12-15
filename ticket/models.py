import uuid
from django.db import models
from users.models import User


class Ticket(models.Model):
    STATUS_CHOICES = (
        ('Active', 'Active'),
        ('completed', 'Completed'),
        ('pending', 'Pending')
    )

    ticket_number = models.UUIDField(default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_by')
    date_created = models.DateTimeField(auto_now_add=True)
    assign_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    is_resolved = models.BooleanField(default=False)
    accepted_date = models.DateTimeField(null=True, blank=True)
    close_date = models.DateTimeField(null=True, blank=True)
    ticket_status = models.CharField(max_length=255, choices=STATUS_CHOICES)

    def __str__(self):
        return self.title
