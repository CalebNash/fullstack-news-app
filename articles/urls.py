from django.urls import path


from .views import ArticleListCreateView, ArticleRetrieveUpdateDestroyView




urlpatterns = [
    path('<int:pk>/', ArticleRetrieveUpdateDestroyView.as_view()),
    path('', ArticleListCreateView.as_view()),
]
