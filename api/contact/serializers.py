from rest_framework import serializers

class Validator:
    class PostSubmitContact(serializers.Serializer):
        senderName = serializers.CharField(required=True, min_length=1, max_length=100)
        senderEmail = serializers.EmailField(required=True, min_length=10, max_length=150)
        message = serializers.CharField(required=True, min_length=10, max_length=500)
        responseToken = serializers.CharField(required=True, min_length=30)