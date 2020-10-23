from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_auth.models import TokenModel


from .models import Article


User = get_user_model()



class ArticleSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    class Meta:
        model = Article
        fields = ('id', 'title','body', 'category', 'status', 'top_story', 'created_at', 'user', 'image')


class TokenSerializer(serializers.ModelSerializer):
    is_staff = serializers.ReadOnlyField(source='user.is_staff')
    class Meta:
        model = TokenModel
        fields = ('key', 'is_staff')
