from django.urls import path
from . import views

urlpatterns = [
    # Home
    path("", views.home, name="home"),

    # Main Pages
    path("about/", views.about, name="about"),
    path("courses/", views.courses, name="courses"),
    path("admission/", views.admission, name="admission"),
    path("placement/", views.placement, name="placement"),
    path("library/", views.library, name="library"),
    path("news/", views.news, name="news"),
    path("contact/", views.contact, name="contact"),

    # AI Assistant
    path("assistant/", views.assistant, name="assistant"),
    path("chatbot/", views.chatbot, name="chatbot"),

    # Dashboards
    path(
        "student-dashboard/",
        views.student_dashboard,
        name="student_dashboard",
    ),
    path(
        "admin-dashboard/",
        views.admin_dashboard,
        name="admin_dashboard",
    ),
]
