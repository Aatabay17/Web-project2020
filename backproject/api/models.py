from django.db import models
from django.contrib.auth.models import User
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

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    count = models.IntegerField()
    category = models.ForeignKey(Category,
                                 on_delete=models.CASCADE,
                                 related_name='products')

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'count': self.count,
        }

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
    description = models.CharField(max_length=200)
    user = models.ForeignKey(User,
                                 on_delete=models.CASCADE,
                                 related_name='products')

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'description': self.description,
        }