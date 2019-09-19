from django.db import models
from users.models import CustomUser
from profiles.models import Profile
# Create your models here.

class SurveyMeta(models.Model):

    symptom = models.CharField(max_length=30)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    # default=date.today로 해도 될 듯?

    # 과거력

    # 이전에 건강검진을 받은 적이 있나요?
    had_checkup = models.CharField(max_length=30, null=True, blank=True, default="")

    # 몇 년 전에 받았나요?
    had_checkup_true = models.CharField(
        max_length=30, blank=True, null=True, default="")

    # 이전에 진단받은 병이 있나요?
    diagnosed_disease = models.CharField(max_length=30, blank=True, null=True, default="") 
    # 인우 : 진단받은 병이 복수일 경우?

    # 드시고 계시는 약이 있나요?
    taking_medicine = models.CharField(max_length=30, null=True, blank=True, default="")

    # 드시고 계신 약물을 알려주세요
    what_medicine = models.CharField(max_length=20, blank=True, null=True, default="")

    # 가족분들이 진단 받은 병이 있나요?
    family_history = models.CharField(max_length=30, blank=True, null=True, default="")

    # 사회력

    # 술을 드시나요?
    drinking = models.CharField(max_length=30, null=True, blank=True, default="")

    # 매주 몇 병 드시나요?
    drinking_per_week = models.CharField(max_length=30, null=True, blank=True, default="")

    # 흡연하시나요?
    smoking = models.CharField(max_length=30, null=True, blank=True, default="")

    # 몇년째 피고 계신가요?
    how_long_smoking = models.CharField(max_length=30, null=True, blank=True, default="")

    # 몇 갑씩 피시나요
    how_much_smoking = models.CharField(max_length=30, null=True, blank=True, default="")

    # 직업이 무엇인가요?
    job = models.CharField(max_length=30, blank=True, null=True, default="")
    # 직업을 꼭 말하고 싶지 않을 수도 있죠

    # 다음 중 해당사항에 체크해주세요
    relevant_data = models.CharField(max_length=100, blank=True, null=True, default="")

    def __str__(self):
        return self.name
        # return str(self.user)

class StomachacheSurvey(SurveyMeta):
    survey = models.OneToOneField(
        SurveyMeta, on_delete=models.CASCADE, related_name='stomach', parent_link=True)

    # Onset
    symptom_start = models.CharField(max_length=50, default="", blank=True, null=True)
    symptom_start_less_than_month = models.CharField(
        max_length=30, default="", blank=True, null=True)
    fast_or_slow = models.CharField(max_length=30, default="", blank=True, null=True)
    symptom_situation = models.CharField(max_length=50, default="", blank=True, null=True)

    # location
    symptom_location = models.CharField(max_length=30, default="", blank=True, null=True)

    location_move = models.CharField(max_length=30, default="", blank=True, null=True)
    
    location_move_how = models.CharField(max_length=100, default="", blank=True, null=True)
    pain_spread = models.CharField(max_length=30, default="", blank=True, null=True)
    pain_spread_where = models.CharField(max_length=100, default="", blank=True, null=True)

    # Duration
    pain_duration = models.CharField(max_length=30, default="", blank=True, null=True)
    pain_repeated = models.CharField(max_length=30, default="", blank=True, null=True)
    
    # 지환 : pain_per_day를 삭제하고 두개 필드 추가
    pain_how_often_day = models.CharField(max_length=30, default="", blank=True, null=True)
    pain_how_often_many = models.CharField(max_length=30, default="", blank=True, null=True)

    # Course
    pain_worse = models.CharField(max_length=30, default="", blank=True, null=True)

    # Experience
    pain_experience = models.CharField(max_length=30, default="", blank=True, null=True)

    # character
    pain_character = models.CharField(max_length=30, default="", blank=True, null=True)
    pain_score = models.CharField(max_length=30, default="", blank=True, null=True)

    # associated symptom
    associated_symptom_digestive = models.CharField(max_length=30, default="", blank=True, null=True)

    associated_symptom_circulatory = models.CharField(max_length=30, default="", blank=True, null=True)

    associated_symptom_gynecology = models.CharField(max_length=30, default="", blank=True, null=True)

    associated_symptom_whole_body = models.CharField(max_length=30, default="", blank=True, null=True)

    associated_symptom_urinary = models.CharField(max_length=30, default="", blank=True, null=True)

    associated_symptom_others = models.CharField(max_length=100, default="", blank=True, null=True)

    # factor
    factor = models.CharField(max_length=30, default="", blank=True, null=True)
    other_factor = models.CharField(max_length=100, default="", blank=True, null=True)

    # 다음 중 해당 사항에 모두 체크해주세요

    abdomen_relevant = models.CharField(max_length=30, default="", blank=True, null=True)
    # abdomen_relevant = models.CharField(max_length=100)

    free_to_describe = models.TextField(default="", blank=True, null=True)

    def __str__(self):
        return (self.author.username + '/' + self.symptom + '/' + str(self.id))
        
