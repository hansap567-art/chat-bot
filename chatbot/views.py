from django.shortcuts import render


def home(request):

    answer = ""

    if request.method == "POST":

        question = request.POST.get("question", "").lower().strip()

        # -------------------------
        # Greetings
        # -------------------------

        if any(word in question for word in ["hi", "hello", "hey"]):
            answer = """👋 Hello!

Welcome to Nilgiri College AI Assistant.

How can I help you today?"""

        elif "how are you" in question:
            answer = """😊 I'm doing great!

Thank you for asking.

How can I help you today?"""

        elif "who are you" in question:
            answer = """🤖 I am the Nilgiri College AI Assistant.

I can help you with:

🎓 Courses
💰 Fees
📝 Admissions
🏠 Hostel
📚 Library
💼 Placements
🎯 Scholarships
📞 Contact Information
📅 Exams"""

        elif "thank" in question:
            answer = """😊 You're welcome!

Happy to help.

Have a wonderful day!"""

        elif "bye" in question:
            answer = """👋 Goodbye!

Have a great day.

Best wishes for your studies!"""

        # -------------------------
        # Courses
        # -------------------------

        elif "course" in question or "courses" in question:

            answer = """🎓 Available Courses

• B.Sc Computer Science

• B.Sc Computer Science with Cyber Security

• BCA with AI & Robotics

• BCA with Data Science & Machine Learning

• B.Com

• BBA

• B.Sc Psychology

• M.Sc Computer Science

• M.Com

• MA English"""

        elif "computer science" in question:

            answer = """💻 B.Sc Computer Science

Duration : 3 Years

Career Options

✔ Software Developer

✔ AI Engineer

✔ Data Scientist

✔ Cloud Engineer

✔ Cyber Security Analyst"""

        elif "bca" in question:

            answer = """💻 Bachelor of Computer Applications

Duration : 3 Years

Career Options

✔ Web Developer

✔ Software Engineer

✔ App Developer

✔ Database Administrator"""

        elif "bcom" in question:

            answer = """💼 Bachelor of Commerce

Duration : 3 Years

Career Options

✔ Accountant

✔ Auditor

✔ Banker"""

        elif "bba" in question:

            answer = """📊 Bachelor of Business Administration

Duration : 3 Years

Career Options

✔ HR Manager

✔ Marketing

✔ Entrepreneur"""

        # -------------------------
        # Fees
        # -------------------------

        elif "fee" in question or "fees" in question:

            answer = """💰 Course Fees

B.Sc Computer Science : ₹35,000

BCA : ₹45,000

B.Com : ₹25,000

BBA : ₹40,000"""

        # -------------------------
        # Admission
        # -------------------------

        elif "admission" in question:

            answer = """📝 Admission Process

1. Fill the application form.

2. Submit required documents.

3. Pay admission fee.

4. Receive confirmation."""

        elif "document" in question:

            answer = """📄 Required Documents

✔ SSLC Certificate

✔ Plus Two Certificate

✔ Aadhaar Card

✔ Passport Size Photos"""

        # -------------------------
        # Hostel
        # -------------------------

        elif "hostel" in question:

            answer = """🏠 Hostel Facilities

✔ Separate Hostel

✔ Wi-Fi

✔ Laundry

✔ Dining Hall

✔ 24×7 Security"""

        # -------------------------
        # Library
        # -------------------------

        elif "library" in question:

            answer = """📚 Library

✔ Digital Library

✔ Reading Hall

✔ Thousands of Books

✔ E-Journals"""

        # -------------------------
        # Placement
        # -------------------------

        elif "placement" in question:

            answer = """💼 Placement Cell

Top Recruiters

✔ TCS

✔ Infosys

✔ Wipro

✔ Accenture

✔ Cognizant"""

        elif "highest salary" in question:

            answer = """💰 Highest Salary Courses

🥇 Computer Science

🥈 BCA

🥉 BBA"""

        elif "best placement" in question:

            answer = """🏆 Best Placement Courses

✔ B.Sc Computer Science

✔ BCA

✔ BBA"""

        # -------------------------
        # AI
        # -------------------------

        elif "ai" in question or "artificial intelligence" in question:

            answer = """🤖 AI Career

Learn

✔ Python

✔ Machine Learning

✔ Deep Learning

✔ Data Science

✔ Cloud Computing"""

        elif "cyber" in question:

            answer = """🔐 Cyber Security

Recommended Skills

✔ Networking

✔ Linux

✔ Python

✔ Ethical Hacking

✔ Digital Forensics"""

        # -------------------------
        # Scholarship
        # -------------------------

        elif "scholarship" in question:

            answer = """🎯 Scholarships

✔ Merit Scholarship

✔ Government Scholarship

✔ Sports Scholarship"""

        # -------------------------
        # Exams
        # -------------------------

        elif "exam" in question:

            answer = """📅 Semester examinations will be announced by the Examination Cell.

Please check the official notice board for the latest timetable."""

        elif "result" in question:

            answer = """📄 Results are published through the college examination portal after evaluation."""

        # -------------------------
        # Contact
        # -------------------------

        elif "contact" in question:

            answer = """☎ Contact

🌐 https://nilgiricollege.ac.in/

📧 office@nilgiricollege.ac.in

📍 Nilgiri College of Arts & Science"""

        # -------------------------
        # Motivation
        # -------------------------

        elif "motivate" in question:

            answer = """💪 Believe in yourself.

Success comes from consistency.

Keep learning.

Keep growing.

You can do it!"""

        elif "joke" in question:

            answer = """😂 Why did the computer go to college?

Because it wanted to improve its BYTE! 😄"""

        else:

            answer = """🤖 Sorry, I don't understand that question yet.

Try asking about:

🎓 Courses

💰 Fees

📝 Admissions

🏠 Hostel

📚 Library

💼 Placement

📅 Exams

🎯 Scholarship

📞 Contact"""

    return render(request, "index.html", {"answer": answer})