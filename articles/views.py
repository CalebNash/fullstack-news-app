from rest_framework import generics
from rest_framework import permissions


from .models import Article
from .serializers import ArticleSerializer




class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.filter(status = 'publish')
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class SuperUserArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAdminUser,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

class UserArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

    def get_queryset(self):
         user = self.request.user
         return Article.objects.filter(user=user)


class ArticleRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


    def perform_create(self, serializer):
        serializer.save(user = self.request.user)

# class ArticleRetrieveUpdateDestroyView(generics.RetrieveAPIView):
#     queryset = Article.objects.filter(category === 'published')
#     serializer_class = ArticleSerializer
#     permission_classes = (permissions.IsAuthenticatedOrReadOnly)
