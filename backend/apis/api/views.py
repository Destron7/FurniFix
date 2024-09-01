# import viewsets
from rest_framework import viewsets

# import local data
from .serializer import BackendSerializer
from ..models import BackendModel

# create a viewset


class BackendViewSet(viewsets.ModelViewSet):
    # define queryset
    queryset = BackendModel.objects.all()

    # specify serializer to be used
    serializer_class = BackendSerializer
