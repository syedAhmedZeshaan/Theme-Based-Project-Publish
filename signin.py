# views.py

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.urls import path
import json

@csrf_exempt  # Use this only for testing; implement CSRF protection in production
def signup_view(request):
    if request.method == 'POST':
        # Parse the JSON data
        data = json.loads(request.body)
        name = data.get('name')
        email = data.get('email')
        password = data.get('password')

        # Here you can handle the data (e.g., save it to the database)
        # For now, just return a success response
        return JsonResponse({'message': 'User  created successfully!', 'name': name, 'email': email})

    return JsonResponse({'error': 'Invalid request'}, status=400)

# URL configuration
urlpatterns = [
    path('your-django-endpoint/', signup_view, name='signup'),
]