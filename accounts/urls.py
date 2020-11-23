from django.urls import path, include
from .views import ProfileListCreateView, ProfileDetailView

urlpatterns = [
    path('', ProfileListCreateView.as_view()),
    path('<int:pk>/', ProfileDetailView.as_view()),
]
