from django.urls import path, include



urlpatterns = [
    path('articles/', include('articles.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('profile/', include('accounts.urls')),
]
