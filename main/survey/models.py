from django.db import models
from users.models import CustomUser
from profiles.models import Profile
# Create your models here.

class SurveyMeta(models.Model):

    HOW_LONG_BEFORE = [
        ("1년 이내", '1년 이내'),
        ("1-3년", "1-3년"),
        ("3-5년", "3-5년"),
        ("5-10년", "5-10년"),
        ("10년 이상", "10년 이상"),
    ]

    symptom = models.CharField(max_length=30)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    # default=date.today로 해도 될 듯?

    # 과거력

    # 이전에 건강검진을 받은 적이 있나요?
    had_checkup = models.CharField(max_length=30, null=True, blank=True)

    # 몇 년 전에 받았나요?
    had_checkup_true = models.CharField(
        max_length=30, choices=HOW_LONG_BEFORE, blank=True, null=True)
    # 인우 : Vue와의 상호작용을 고려했을 때 int필드가 더 좋을 것 같습니다
    # 다만 몇 년 몇개월 같이 쓰기가 어렵긴 하겠네요

    # 이전에 진단받은 병이 있나요?
    # diagnosed_disease = models.CharField(max_length=30, choices=DISEASE_LIST, blank=True, null=True)
    diagnosed_disease = models.CharField(max_length=30, blank=True, null=True) 
    # 인우 : 진단받은 병이 복수일 경우?

    # 드시고 계시는 약이 있나요?
    taking_medicine = models.CharField(max_length=30, null=True, blank=True)

    # 드시고 계신 약물을 알려주세요
    what_medicine = models.CharField(max_length=20, blank=True, null=True)
    # 인우 : 복용하고 있는 약물이 여러 개라면 어떻게 해야할까요?
    # 예시가 있는 게 아니니 choice를 쓰기는 어렵고...

    # 가족분들이 진단 받은 병이 있나요?
    # family_history = models.CharField(max_length=30, choices=DISEASE_LIST, blank=True, null=True)
    family_history = models.CharField(max_length=30, blank=True, null=True)

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
    # relevant_data = models.CharField(
    #     max_length=100, choices=BAD_HABITS, blank=True, null=True)
    relevant_data = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name
        # return str(self.user)

class StomachacheSurvey(SurveyMeta):
    survey = models.OneToOneField(
        SurveyMeta, on_delete=models.CASCADE, related_name='stomach', parent_link=True)

    SYMTPOM_START = [
        ('less_than_month', '한 달이 안됐습니다.'),
        ('more_than_month', '한 달이 넘었습니다.'),
    ]
    
    FAST_OR_SLOW = [
        ('fast', '갑자기'),
        ('slow', '천천히'),
    ]

    PAIN_POSITION = [
        ("whole abdomen", "복부 전체"),
        ("sternal", "명치"),
        ("umbilicus", "배꼽"),
        ("flank", "옆구리"),
        ("LUQ", "왼쪽 위"),
        ("LLQ", "왼쪽 아래"),
        ("RUQ", "오른쪽 위"),
        ("RLQ", "오른쪽 아래"),
    ]

    PAIN_DURATION = [
        ('lest_than_10m', '10분 미만'),
        ('from_10m_to_1h', '10분 ~ 1시간'),
        ('more_than_1h', '1시간 이상'),
        ('all_day', '하루종일'),
    ]

    PAIN_REPEATED = [
        ('repeat', '반복됩니다'),
        ('no_repeat', '단발성입니다'),
    ]
    PAIN_HOW_OFTEN_DAY = [
        ('one_day', '하루에'),
        ('one_week', '일주일')
    ]

    PAIN_HOW_OFTEN_MANY = [
        ('0_to_1', '0~1회'),
        ('2_to_3', '2~3회'),
        ('4_to_5', '4회~5회'),
        ('more_than_6', '6회이상'),
    ]

    PAIN_CHARACTER = [ # 통증의 양상 다양한 표현이 있을 수 있다.
        ('crushing', '쥐어짜듯'),
        ('burning', '타는듯'),
        ('stabbing', '베이듯'),
        ('splitting', '찢어지듯'),
    ]

    PAIN_SCORE = [
        ('1', '1점'),
        ('2', '2점'),
        ('3', '3점'),
        ('4', '4점'),
        ('5', '5점'),
        ('6', '6점'),
        ('7', '7점'),
        ('8', '8점'),
        ('9', '9점'),
        ('10', '10점'),
    ]

    ASSOCIATED_SYMPTOM_DIGESTIVE = [
        ('change of appetite', '식욕감소'),
        ('nausea', '구역질'),
        ('vomiting', '구토'),
        ('vomiting blood', '토혈'),
        ('abdominal inflation', '복부팽만'),
        ('lump on abdomen', '복부종괴'),
        ('constipation', '변비'),
        ('diarrhea', '설사'),
        ('rectal_bleeding', '혈변'),
        ('melena', '흑색변'),
        ('steatorrhea', '지방변'),
        ('jaundice', '황달'),
        ('nothing', '해당사항 없음'),        
    ]

    ASSOCIATED_SYMPTOM_CIRCULATORY = [
        ('chest pain', '가슴통증'),
        ('shortness of breah', '호흡곤란'),
        ('cough', '기침'),
        ('runny nose', '콧물'),
        ('nothing', '해당사항 없음'),        
    ]

    ASSOCIATED_SYMPTOM_GYNECOLOGY = [
        ('colporrhagia', '질출혈'),
        ('leukorrhea', '질분비물'),
        ('menstrual cycle change', '생리주기변화'),
        ('pregnant possibility', '임신가능성'),
        ('nothing', '해당사항 없음'),            
    ]

    ASSOCIATED_SYMPTOM_WHOLE_BODY = [
        ('fever', '발열'),
        ('chilling', '오한'),
        ('fatigue', '피로'),
        ('weight change', '체중변화'),
        ('sweating', '식은땀'),
        ('sleep disturbance','수면곤란'), 
        ('headache', '두통'),
        ('nothing', '해당사항 없음'),        
    ]

    ASSOCIATED_SYMPTOM_URINARY = [
        ('painful urination', '배뇨통'),
        ('chnage the quantity of urine', '소변량변화'),
        ('red urine', '혈뇨'),
        ('foamy urine', '거품뇨'),
        ('frequency' ,'잦은 소변'),
        ('nothing', '해당사항 없음'),        
    ]

    FACTOR = [
        ('after meal', '식사후 심해짐'),
        ('no meal', '공복에심해짐'),
        ('after alchol', '음주후 심해짐'),
        ('posture', '자세에따라 통증변화'),
        ('urination', '배뇨시 통증변화'),
        ('defecation', '배변시 통증변화'),
        ('nothing', '해당사항 없음'),
    ]

    ABDOMEN_HISTORY = [
        ('abdomen_hurted', "복부를 다친 적이 있음"),
        ('abdomen_surgery', "복부 수술을 받은 적이 있음"),
        ('abdomen_nothing', "해당없음")
    ]

    # Onset
    symptom_start = models.CharField(choices=SYMTPOM_START, max_length=50, default="", blank=True, null=True)
    symptom_start_less_than_month = models.CharField(
        max_length=30, default="", blank=True, null=True)
    fast_or_slow = models.CharField(choices=FAST_OR_SLOW, max_length=30, default="", blank=True, null=True)
    symtpom_situation = models.CharField(max_length=50, default="", blank=True, null=True)

    # location
    symtpom_location = models.CharField(max_length=30, choices=PAIN_POSITION, default="", blank=True, null=True)

    location_move = models.CharField(max_length=30, default="", blank=True, null=True)
    
    location_move_how = models.CharField(max_length=100, default="", blank=True, null=True)
    pain_spread = models.CharField(max_length=30, default="", blank=True, null=True)
    pain_spread_where = models.CharField(max_length=100, default="", blank=True, null=True)

    # Duration
    pain_duration = models.CharField(choices=PAIN_DURATION, max_length=30, default="", blank=True, null=True)
    pain_repeated = models.CharField(max_length=30, default="", blank=True, null=True)
    # pain_per_day = models.CharField(choices=PAIN_PER_DAY, max_length=30)
    
    # 지환 : pain_per_day를 삭제하고 두개 필드 추가
    pain_how_often_day = models.CharField(choices=PAIN_HOW_OFTEN_DAY, max_length=30, default="", blank=True, null=True)
    pain_how_often_many = models.CharField(choices=PAIN_HOW_OFTEN_MANY, max_length=30, default="", blank=True, null=True)

    # Course
    pain_worse = models.CharField(max_length=30, default="", blank=True, null=True)

    # Experience
    pain_experience = models.CharField(max_length=30, default="", blank=True, null=True)

    # character
    pain_character = models.CharField(choices=PAIN_CHARACTER, max_length=30, default="", blank=True, null=True)
    pain_score = models.CharField(choices=PAIN_SCORE, max_length=30, default="", blank=True, null=True)

    # associated symptom
    associated_symptom_digestive = models.CharField(
        choices=ASSOCIATED_SYMPTOM_DIGESTIVE, max_length=30, default="", blank=True, null=True)

    associated_symptom_circulatory = models.CharField(
        choices=ASSOCIATED_SYMPTOM_CIRCULATORY, max_length=30, default="", blank=True, null=True)

    associated_symptom_gynecology = models.CharField(
        choices=ASSOCIATED_SYMPTOM_GYNECOLOGY, max_length=30, default="", blank=True, null=True)

    associated_symptom_whole_body = models.CharField(
        choices=ASSOCIATED_SYMPTOM_WHOLE_BODY, max_length=30, default="", blank=True, null=True)

    associated_symptom_urinary = models.CharField(
        choices=ASSOCIATED_SYMPTOM_URINARY, max_length=30, default="", blank=True, null=True)

    associated_symptom_others = models.CharField(max_length=100, default="", blank=True, null=True)

    # factor
    factor = models.CharField(choices=FACTOR, max_length=30, default="", blank=True, null=True)
    other_factor = models.CharField(max_length=100, default="", blank=True, null=True)

    # 다음 중 해당 사항에 모두 체크해주세요

    abdomen_relevant = models.CharField(max_length=30, choices=ABDOMEN_HISTORY, default="", blank=True, null=True)
    # abdomen_relevant = models.CharField(max_length=100)

    free_to_describe = models.TextField(default="", blank=True, null=True)

    def __str__(self):
        return (self.author.username + '/' + self.symptom + '/' + str(self.id))
        
