from django.shortcuts import render
from rest_framework import viewsets
from api.serializers import taskSerializer
from api.models import task
# Create your views here.
class taskViewSet(viewsets.ModelViewSet):
    serializer_class = taskSerializer
    queryset = task.objects.all()