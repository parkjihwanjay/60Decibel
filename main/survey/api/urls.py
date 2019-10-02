from django.urls import include, path
from .views import StomachacheSurveyCreateView
from .views import SurveyMetaListView, OwnSurveyListView, StomachacheSurveyRetrieveView

urlpatterns = [
    path('surveys/stomach/', StomachacheSurveyCreateView.as_view(),
         name="stomach-create"),
    path("surveys/", OwnSurveyListView.as_view(), name="survey-history"),
    path("surveys/stomach/<int:id>/",
         StomachacheSurveyRetrieveView.as_view(), name="stomach-history")
]
