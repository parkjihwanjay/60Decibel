from rest_framework import serializers
from profiles.models import Profile
from drf_extra_fields.fields import Base64ImageField

class ProfileDisplaySerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    avatar = Base64ImageField(required=False, allow_null=True)

    class Meta:
        model = Profile
        fields = "__all__"

class ProfileUpdateSerializer(serializers.ModelSerializer):
    diagnosed_disease = serializers.ListField(child=serializers.CharField(required=False), allow_empty=True, min_length=0, max_length=20)
    family_history = serializers.ListField(child=serializers.CharField(required=False), allow_empty=True, min_length=0, max_length=20)
    relevant_data = serializers.ListField(child=serializers.CharField(required=False), allow_empty=True, min_length=0, max_length=20)
    avatar = Base64ImageField(required=False, allow_null=True)

    class Meta:
        model = Profile
        fields = ["avatar", "avatar_base64", "gender", "birth_date", "height", "weight", "name",
                  "had_checkup", "had_checkup_true", "diagnosed_disease", "taking_medicine", 
                  "what_medicine", "family_history", "drinking", "drinking_per_week", 
                  "smoking", "how_long_smoking", "how_much_smoking", "job", "relevant_data"]



class ProfileRetrieveSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    avatar = Base64ImageField(required=False, allow_null=True)

    class Meta:
        model = Profile
        fields = ["avatar", "avatar_base64", "gender", "birth_date", "height", "weight", "name",
                  "had_checkup", "had_checkup_true", "diagnosed_disease", "taking_medicine", 
                  "what_medicine", "family_history", "drinking", "drinking_per_week", 
                  "smoking", "how_long_smoking", "how_much_smoking", "job", "relevant_data",
                  "user"]
