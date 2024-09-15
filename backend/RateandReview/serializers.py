from rest_framework import serializers
from .models import RateandReview


class RateandReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = RateandReview
        fields = "__all__"
