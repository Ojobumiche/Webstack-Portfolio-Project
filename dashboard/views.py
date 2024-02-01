from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

@login_required
def dashboard(request):
    if request.user.is_authenticated:
        username = request.user.username
        email = request.user.email
        return render (request, 'dashboard/dashboard.html', {'username': username, 'email': email})
    else:
        return HttpResponse('you are not authenticated. Redirect login page')
    

