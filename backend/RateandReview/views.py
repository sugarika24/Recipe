from rest_framework import viewsets
from .models import RateandReview
from .serializers import RateandReviewSerializer


class RateandReviewViewSet(viewsets.ModelViewSet):
    queryset = RateandReview.objects.all()
    serializer_class = RateandReviewSerializer
