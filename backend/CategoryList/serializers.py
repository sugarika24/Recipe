from rest_framework import serializers
from .models import CategoryList
from rest_framework import viewsets

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryList
        fields = '__all__'


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = CategoryList.objects.all()
    serializer_class = CategorySerializer