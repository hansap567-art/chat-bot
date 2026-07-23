from django.shortcuts import render

def home(request):

    answer = ""
    question = ""

    if request.method == "POST":

        question = request.POST.get("question", "").lower()

        if "course" in question or "bsc" in question or "bca" in question:
            answer = (
                "Nilgiri College offers BSc Computer Science, "
                "BCA AI & Robotics, Cyber Security, Multimedia, "
                "BCom Computer Applications, BBA, MSc Computer Science, "
                "MA English and MCom."
            )

        elif "admission" in question:
            answer = (
                "Admissions are open. Students can apply online by "
                "submitting the application form and required documents."
            )

        elif "document" in question:
            answer = (
                "Required documents are SSLC Certificate, Plus Two Certificate, "
                "Aadhar Card, Passport-size Photos and Transfer Certificate."
            )

        elif "placement" in question:
            answer = (
                "Our Placement Cell provides career guidance and placement "
                "assistance with recruiters like Infosys, TCS, IBM, "
                "Accenture, Cognizant and Wipro."
            )

        elif "library" in question:
            answer = (
                "Our Digital Library has over 25,000 books, journals, "
                "research papers and online learning resources."
            )

        elif "scholarship" in question:
            answer = (
                "Scholarships are available for eligible students based "
                "on academic performance and government schemes."
            )

        elif "fee" in question:
            answer = (
                "Course fees vary by programme. Please contact the "
                "admission office for the latest fee structure."
            )

        elif "contact" in question:
            answer = (
                "📞 Phone: +91 98765 43210\n"
                "📧 Email: info@nilgiricollege.edu"
            )

        elif "hello" in question or "hi" in question:
            answer = (
                "Hello! 👋 Welcome to Nilgiri Smart Campus Portal. "
                "How can I help you today?"
            )

        else:
            answer = (
                "I'm sorry, I couldn't understand your question. "
                "Please ask about courses, admission, placements, library, "
                "fees or scholarships."
            )

    return render(
        request,
        "index.html",
        {
            "question": question,
            "answer": answer,
        },
    )