
from django.urls import path
from api import views

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    # path('users/', views.UserList.as_view()),
    path('login/', obtain_jwt_token),
    # path('logout/', views.logout),
    path('categories/', views.CategoryList.as_view()),
    path('categories/<int:pk>/', views.CategoryDetail.as_view()),
    path('products/', views.ProductList.as_view()),
    path('products/<int:pk>/', views.ProductDetail.as_view()),
    path('comments/', views.CommentList.as_view()),
    # path('categories/<int:pk>/products/', views.CategoryProductsAPIView.as_view()),
    # path('categories/products/', views.CategoryProductCreateAPIView.as_view())
]