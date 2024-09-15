from django.db import models

# Create your models here.
class RateandReview(models.Model):
    tittle= models.CharField(max_length=50,default='Default')
    recipe_id = models.IntegerField()
    rating = models.IntegerField()
    review = models.CharField(max_length=500)
    date = models.DateField()
    time = models.TimeField()
    
    def __str__(self):
        return self.tittle
