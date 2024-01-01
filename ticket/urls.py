from django.urls import path
from . import views

urlpatterns = [
    path('ticket-detail/<int:pk>/', views.ticket_details, name= 'ticket-details'),
    path('create-ticket/', views.creat_ticket, name= 'create-ticket'),
    path('update-ticket/<int:pk>/', views.update_ticket, name= 'update-ticket'),
    path('all-ticket/', views.all_ticket, name= 'all-ticket'),
    path('ticket-queue/', views.ticket_queue, name = 'ticket-queue'),
    path('accept-ticket/<int:pk>/', views.accept_ticket, name='accept-ticket'),
    path('closed-ticket/<int:pk>/', views.closed_ticket, name= 'closed-ticket'),
    path('workspace/', views.workspace, name = 'workspace'),
    path('all-closed-ticket/', views.all_closed_tickets, name='all-closed-ticket'),
    
]
