from rest_framework import serializers
from .models import *


# Create a model serializer
class ReactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = contactus
        fields = ["name", "email", "message", "created_at", "updated_at"]
