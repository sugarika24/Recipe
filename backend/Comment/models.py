from django.db import models

class Comment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    rate=models.IntegerField(default=0)
    

    # Add any additional fields you need for your comment model

    def __str__(self):
        return self.content