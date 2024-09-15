from rest_framework import viewsets
from .serializers import CategorySerializer
from .models import CategoryList


class CategoryListViewSet(viewsets.ModelViewSet):
    queryset = CategoryList.objects.all()
    serializer_class = CategorySerializer
