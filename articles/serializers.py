from rest_framework import serializers


from .models import Article




class ArticleSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Article
        fields = ('id', 'title','body', 'category', 'status', 'author', 'top_story', 'created_at',)
