from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=255)
    body = models.TextField()
    category = models.CharField(max_length=255)
    status = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    top_story = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.title
