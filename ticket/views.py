from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Ticket
from .form import UpdateTicketForm
from .form import CreateTicketForm
import datetime
from .serializer import TicketSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view



@api_view(['POST'])
def create_ticket_api(request):
    if request.method == 'POST':
        serializer = TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status)


"""
For customer
"""

# Create a ticket
def creat_ticket(request):
    if request.methods == 'POST':
        form = CreateTicketForm(request.POST)
        if form.is_valid():
            var = form.save(commit=False)
            var.created_by = request.user
            var.ticket_status = 'pending'
            var.save()
            messages.info(request, 'Your has been successfully submited, an engineer would be assign to you soon')
            return redirect('dashboard')
        else:
            messages.warning(request, 'something went wrong. Please chech your form input')
            return redirect('create-ticket')
    else:
        form = CreateTicketForm(instance=Ticket)
        context = {'form':form}
        return render(request, 'ticket/create_ticket.html', context)

# updating the ticket
def update_ticket(request, pk):
    ticket = Ticket.objects.get(pk=pk)
    if request.methods == 'POST':
        form = UpdateTicketForm(request.POST, instance = ticket)
        if form.is_valid():
            form.save()
            messages.info(request, 'Your ticket info has been updated and all the changes are saved in the database')
            return redirect('dashboard')
        else:
            messages.warning(request, 'something went wrong. Please check your form input')
           # return redirect('create-ticket')
    else:
        form = UpdateTicketForm(instance = ticket)
        context = {'form':form}
        return render(request, 'ticket/update_ticket.html', context)
        
# view all created ticket
def all_ticket(request):
    ticket = Ticket.objects.filter(created_by=request.user)
    context = {'ticket': ticket}
    return render(request, 'ticket/all_tickets.html', context)

# view ticket details
def ticket_details(request, pk):
    ticket = Ticket.objects.get(pk=pk)
    context = {'ticket': ticket}
    return render(request, 'ticket/ticket_details.html', context)
    
    


"""For engineer"""
# view ticket queue
def ticket_queue(request):
    tickets = Ticket.objects.filters(ticket_status='pending')
    context = {'tickets': tickets}
    return render(request, 'ticket/ticket_queue.html', context)

# accept a ticket from queue
def accept_ticket(request, pk):
    tickets = Ticket.objects.get(pk= pk)
    tickets.assigned_to = request.user
    tickets.ticket_status = 'Active'
    tickets.accepted_date = datetime.datetime.now()
    tickets.save()
    messages.info(request, 'Ticket has been accepted. Please resolve as soon as possible!')
    return redirect('ticket-queue')

# close the ticket
def closed_ticket(request,pk):
    tickets = Ticket.objects.get(pk=pk)
    tickets.ticket_status = 'completed'
    tickets.is_resolved = True
    tickets.closed_date = datetime.datetime.now()
    tickets.save()
    messages.info(request, 'Ticket has been resolved. Thank you brilliant Support Engineers!')
    return redirect('ticket-queue')

# ticket engineer is working on
def workspace(request):
    tickets = Ticket.objects.filter(assigned_to =request.user, is_resolved=False)
    context = {'tickets':tickets}
    return render(request, 'ticket/workspace.html', context)

# all closed/resolved ticket
def all_closed_tickets(request):
    tickets = Ticket.objects.filter(assined_to = request.user, is_resolved=True)
    context = {'tickets': tickets}
    return render(request, 'ticket/all_close_tickets.html', context)