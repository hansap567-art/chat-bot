import json

from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .ai import ask_ai


# -----------------------------
# Website Pages
# -----------------------------

def home(request):
    return render(request, "home.html")


def about(request):
    return render(request, "about.html")


def courses(request):
    return render(request, "courses.html")


def admission(request):
    return render(request, "admission.html")


def placement(request):
    return render(request, "placement.html")


def library(request):
    return render(request, "library.html")


def news(request):
    return render(request, "news.html")


def contact(request):
    return render(request, "contact.html")


# -----------------------------
# AI Assistant
# -----------------------------

def assistant(request):
    return render(request, "assistant.html")


@csrf_exempt
def chatbot(request):

    if request.method == "POST":

        try:

            body = json.loads(request.body)

            question = body.get("message", "")

            answer = ask_ai(question)

            return JsonResponse({
                "answer": answer
            })

        except Exception as e:

            return JsonResponse({
                "answer": str(e)
            })

    return JsonResponse({
        "answer": "Only POST requests are allowed."
    })


# -----------------------------
# Dashboards
# -----------------------------

def student_dashboard(request):
    return render(request, "student_dashboard.html")


def admin_dashboard(request):
    return render(request, "admin_dashboard.html")