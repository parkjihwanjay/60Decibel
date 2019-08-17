from django.db import models
from datetime import date
from users.models import CustomUser


class Profile(models.Model):

    HOW_LONG_BEFORE = [
        ("1년 이내", '1년 이내'),
        ("1-3년", "1-3년"),
        ("3-5년", "3-5년"),
        ("5-10년", "5-10년"),
        ("10년 이상", "10년 이상"),
    ]

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

    GENDER_CHOICES = [
        ('남성', '남성'), ("여성", "여성")
    ]

    user = models.OneToOneField(
        CustomUser, on_delete=models.CASCADE, related_name='profile')
    avatar = models.ImageField(null=True, blank=True)

    gender  = models.CharField(
        max_length=20, choices=GENDER_CHOICES, null=True, blank=True)

    birth_date = models.CharField(max_length=30, null=True, blank=True)

    height = models.CharField(max_length=30, null=True, blank=True)

    weight = models.CharField(max_length=30, null=True, blank=True)

    name = models.CharField(max_length=30, null=True, blank=True)

    # 과거력

    # 이전에 건강검진을 받은 적이 있나요?
    had_checkup = models.CharField(max_length=30, null=True, blank=True)

    # 몇 년 전에 받았나요?
    had_checkup_true = models.CharField(
        max_length=30, choices=HOW_LONG_BEFORE, blank=True, null=True)
    # 인우 : Vue와의 상호작용을 고려했을 때 int필드가 더 좋을 것 같습니다
    # 다만 몇 년 몇개월 같이 쓰기가 어렵긴 하겠네요

    # 이전에 진단받은 병이 있나요?
    diagnosed_disease = models.CharField(max_length=30, choices=DISEASE_LIST, blank=True, null=True)
    # 인우 : 진단받은 병이 복수일 경우?

    # 드시고 계시는 약이 있나요?
    taking_medicine = models.CharField(max_length=30, null=True, blank=True)

    # 드시고 계신 약물을 알려주세요
    what_medicine = models.CharField(max_length=20, blank=True, null=True)
    # 인우 : 복용하고 있는 약물이 여러 개라면 어떻게 해야할까요?
    # 예시가 있는 게 아니니 choice를 쓰기는 어렵고...

    # 가족분들이 진단 받은 병이 있나요?
    family_history = models.CharField(max_length=30, choices=DISEASE_LIST, blank=True, null=True)

    # 사회력

    # 술을 드시나요?
    drinking = models.CharField(max_length=30, null=True, blank=True)

    # 매주 몇 병 드시나요?
    drinking_per_week = models.CharField(max_length=30, null=True, blank=True)

    # 흡연하시나요?
    smoking = models.CharField(max_length=30, null=True, blank=True)

    # 몇년째 피고 계신가요?
    how_long_smoking = models.CharField(max_length=30, null=True, blank=True)

    # 몇 갑씩 피시나요
    how_much_smoking = models.CharField(max_length=30, null=True, blank=True)

    # 직업이 무엇인가요?
    job = models.CharField(max_length=30, blank=True, null=True)
    # 직업을 꼭 말하고 싶지 않을 수도 있죠

    # 다음 중 해당사항에 체크해주세요
    relevant_data = models.CharField(
        max_length=100, choices=BAD_HABITS, blank=True, null=True)

    def __str__(self):
        return self.name
        # return str(self.user)
