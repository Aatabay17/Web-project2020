from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
# Create your models here.
class CategoryManager(models.Manager):
    def for_user_order_by_name(self, user):
        return self.filter(created_by=user).order_by('name')

class Category(models.Model):
    name = models.CharField(max_length=200)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=2)

    objects = CategoryManager()

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)


class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(default='')
    price = models.FloatField(default=0)
    img = models.TextField(default='', null=True)
    url = models.TextField(default='')
    category = models.ForeignKey(Category,
                                 on_delete=models.CASCADE,
                                 related_name='products')

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

#
# class User(models.Model):
#     username = models.CharField(max_length=200)
#     password = models.CharField(max_length=20)
#     category = models.ForeignKey(Category,
#                                  on_delete=models.CASCADE,
#                                  related_name='products')
#
#     def __str__(self):
#         return '{}: {}'.format(self.id, self.name)
#
#     def to_json(self):
#         return {
#             'id': self.id,
#             'username': self.username,
#             'password': self.password,
#         }

class Comment(models.Model):
    text = models.TextField(default='')
    created_date = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User,
                                 on_delete=models.CASCADE,
                                 related_name='products')

    def __str__(self):
        return f'Post id={self.id}, name={self.name}'


