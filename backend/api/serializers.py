from rest_framework import serializers
from api.models import task

# using model serializer 
class taskSerializer(serializers.ModelSerializer):
	class Meta:
		model = task
		fields = '__all__' 