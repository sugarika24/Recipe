from django.db import models

# Create your models here.
class Ingredients(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.CharField(max_length=100)
    recipe_id = models.IntegerField()
    unit = models.CharField(max_length=20)
    
    def __str__(self):
        return self.name
