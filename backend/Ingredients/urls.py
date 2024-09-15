from django.urls import include, path
from rest_framework import routers
from .views import IngredientsViewSet

router = routers.DefaultRouter()
router.register(r"Ingredients", IngredientsViewSet)
urlpatterns = [
    path("", include(router.urls)),
]
