"""main URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static

from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token, verify_jwt_token

#이미지 업로드 경로 지정을 위해 작성
from django.conf.urls.static import static
from django.conf import settings
#이미지 업로드 모듈 추가 완료

# https://django-registration.readthedocs.io/en/3.0/activation-workflow.html

urlpatterns = [
    path('admin/', admin.site.urls),

    path("api/", include("users.api.urls")),
    path("api/", include("profiles.api.urls")),
    path('api/', include('survey.api.urls')),

    path("api-auth/", include("rest_framework.urls")),

    path("api/rest-auth/", include("rest_auth.urls")),
    path("api/rest-auth/registration/", include("rest_auth.registration.urls")),

    path('api/rest-auth/obtain_token/', obtain_jwt_token, name="obtain-jwt"),
    path('api/rest-auth/refresh_token/', refresh_jwt_token, name="refresh-jwt"),
    path('api/rest-auth/verify_token/', verify_jwt_token, name="verify-jwt"),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
