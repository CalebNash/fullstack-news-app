from django.urls import path


from .views import ArticleListCreateView, ArticleRetrieveUpdateDestroyView, SuperUserArticleListCreateView, UserArticleListCreateView




urlpatterns = [
    path('<int:pk>/', ArticleRetrieveUpdateDestroyView.as_view()),
    path('', ArticleListCreateView.as_view()),
    path('super-user-view/', SuperUserArticleListCreateView.as_view()),
    path('user-view/', UserArticleListCreateView.as_view()),
]
