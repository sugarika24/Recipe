
from django.db import models

# Create your models here.
class Profile(models.Model):
    # Define your fields here
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    bio = models.TextField()
    email=models.EmailField()

    # Add more fields as needed

    def __str__(self):
        return self.name