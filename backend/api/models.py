from django.db import models

# Create your models here.
class task(models.Model):
    title = models.CharField(max_length=200)
    desc = models.TextField()
    complete = models.BooleanField()
    def __str__(self):
        return self.title