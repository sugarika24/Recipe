from rest_framework import viewsets  # Import the viewsets module
from .models import Ingredients
from .serializers import IngredientSerializer


class IngredientsViewSet(viewsets.ModelViewSet):
    queryset = Ingredients.objects.all()
    serializer_class = IngredientSerializer
