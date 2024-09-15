from django.db import models

class Recipe(models.Model):
    title = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    address = models.TextField()
    email = models.EmailField(max_length=254)
    file = models.FileField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True, upload_to="")
    ingredients = models.TextField()
    instructions = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
