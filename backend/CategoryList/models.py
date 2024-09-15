from django.db import models

# Create your models here.
class CategoryList(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="categories/", blank=True, null=True)

    def __str__(self):
        return self.name
