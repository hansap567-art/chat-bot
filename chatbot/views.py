from django.shortcuts import render

def home(request):

    answer = ""

    if request.method == "POST":
        question = request.POST.get("question", "").lower()

        if "course" in question:
            answer = "We offer BSc CS, BCA, BCom and BBA."

        elif "fee" in question:
            answer = "The BSc CS semester fee is ₹25,000."

        elif "exam" in question:
            answer = "The next semester exams begin on 25 July."

        elif "placement" in question:
            answer = "Top recruiters include TCS, Infosys, Wipro and Accenture."

        else:
            answer = "Sorry, I don't know the answer yet."

    return render(request, "index.html", {"answer": answer})