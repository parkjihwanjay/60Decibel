from django.db import models
from datetime import date
from users.models import CustomUser


class Profile(models.Model):

    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name='profile')
    avatar = models.ImageField(null=True, blank=True, default="")
    avatar_base64 = models.TextField(null=True, blank=True, default="")

    gender  = models.CharField(
        max_length=20, null=True, blank=True, default="")

    birth_date = models.CharField(max_length=30, null=True, blank=True, default="")

    height = models.CharField(max_length=30, null=True, blank=True, default="")

    weight = models.CharField(max_length=30, null=True, blank=True, default="")

    name = models.CharField(max_length=30, null=True, blank=True, default="")

    # 과거력

    # 이전에 건강검진을 받은 적이 있나요?
    had_checkup = models.CharField(max_length=30, null=True, blank=True, default="")

    # 몇 년 전에 받았나요?
    had_checkup_true = models.CharField(
        max_length=30, blank=True, null=True, default="")


    # 이전에 진단받은 병이 있나요?
    diagnosed_disease = models.CharField(max_length=30, blank=True, null=True, default="") 


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
