from rest_framework import serializers


from .models import Profile



class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    user_id = serializers.ReadOnlyField(source='user.id')

    class Meta:
        model = Profile
        fields = ('id', 'user', 'avatar', 'user_id')
