from rest_framework import serializers
from profiles.models import Profile
from drf_extra_fields.fields import Base64ImageField

class ProfileDisplaySerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    avatar = Base64ImageField(required=False)

    class Meta:
        model = Profile
        fields = "__all__"

DISEASE_LIST = [
    ("고혈압", '고혈압'),
    ("간염", '간염'),
    ("결핵", '결핵'),
    ("없음", '없음'),
    ("기타", '기타'),
]

BAD_HABITS = [
    ("스트레스를 많이 받는 편", "스트레스를 많이 받는 편"),
    ("식사 불규칙", "식사 불규칙"),
    ("기름진 음식을 많이 먹음", "기름진 음식을 많이 먹음"),
    ("수면시간 불규칙", "수면시간 불규칙"),
]

class ProfileUpdateSerializer(serializers.ModelSerializer):
    # diagnosed_disease = serializers.MultipleChoiceField(choices=DISEASE_LIST, allow_blank=True)
    # family_history = serializers.MultipleChoiceField(choices=DISEASE_LIST, allow_blank=True)
    # relevant_data = serializers.MultipleChoiceField(choices=BAD_HABITS, allow_blank=True)
    # avatar = Base64ImageField(required=False)

    class Meta:
        model = Profile
        fields = ["gender", "birth_date", "height", "weight", "name",
                  "had_checkup", "had_checkup_true", "taking_medicine", 
                  "what_medicine", "drinking", "drinking_per_week", 
                  "smoking", "how_long_smoking", "how_much_smoking", "job"]
        # fields = ["avatar", "gender", "birth_date", "height", "weight", "name",
        #           "had_checkup", "had_checkup_true", "diagnosed_disease", "taking_medicine", 
        #           "what_medicine", "family_history", "drinking", "drinking_per_week", 
        #           "smoking", "how_long_smoking", "how_much_smoking", "job", "relevant_data"]



class ProfileRetrieveSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField(read_only=True)
    avatar = Base64ImageField(required=False)

    class Meta:
        model = Profile
        fields = ["avatar", "gender", "birth_date", "height", "weight", "name",
                  "had_checkup", "had_checkup_true", "diagnosed_disease", "taking_medicine", 
                  "what_medicine", "family_history", "drinking", "drinking_per_week", 
                  "smoking", "how_long_smoking", "how_much_smoking", "job", "relevant_data",
                  "user"]
