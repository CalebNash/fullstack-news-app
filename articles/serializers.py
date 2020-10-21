from rest_framework import serializers


from .models import Article




class ArticleSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Article
        fields = ('id', 'title','body', 'category', 'status', 'top_story', 'created_at', 'user',)
