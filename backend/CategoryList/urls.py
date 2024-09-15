from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import CategoryListViewSet

router = SimpleRouter()
router.register(r"categories", CategoryListViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
