from django.urls import path


from .views import ArticleListCreateView, SuperUserArticleListCreateView, UserArticleListCreateView, UserArticleDetailView, UserArticleDeleteView, SuperUserArticleDetailView




urlpatterns = [
    # path('<int:pk>/', ArticleRetrieveUpdateDestroyView.as_view()),
    path('', ArticleListCreateView.as_view()),
    path('super-user-view/', SuperUserArticleListCreateView.as_view()),
    path('super-user-view/<int:pk>/', SuperUserArticleDetailView.as_view()),
    path('user-view/', UserArticleListCreateView.as_view()),
    path('user-view/<int:pk>/', UserArticleDetailView.as_view()),
    path('user-view/delete/<int:pk>/', UserArticleDeleteView.as_view()),
]
