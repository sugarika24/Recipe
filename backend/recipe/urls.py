from django.urls import include, path
from rest_framework import routers
from .views import RecipeViewSet

router = routers.DefaultRouter()
router.register(r'recipe', RecipeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]