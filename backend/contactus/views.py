from django.shortcuts import render
from rest_framework.views import APIView
from .models import *
from .serializer import *
from rest_framework.response import Response
from rest_framework.parsers import JSONParser

# candidate_data = JSONParser().parse(request)

jp = JSONParser()


class ReactView(APIView):
    def get(self, request):
        print("**********GET**********")
        data = contactus.objects.all()
        serializer = ReactSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        print("**********POST**********")
        data = request.data
        serializer = ReactSerializer(data=data)
        userData = jp.parse(request)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
