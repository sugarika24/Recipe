from django.urls import include, path
from rest_framework import routers
from .views import RateandReviewViewSet

router = routers.DefaultRouter()
router.register(r"rateandreview", RateandReviewViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
