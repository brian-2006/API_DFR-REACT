from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields = ('id', 'titulo', 'descripcion', 'estado')
        fields = '__all__' #serializa todos los campos
