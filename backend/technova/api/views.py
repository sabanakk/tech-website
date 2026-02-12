from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
import re

# In-memory storage (resets on restart)
contact_submissions = []


class ContactView(APIView):
    def post(self, request):
        data = request.data
        name = data.get("name", "").strip()
        email = data.get("email", "").strip()
        message = data.get("message", "").strip()

        # Validation
        if not all([name, email, message]):
            return Response(
                {"error": "All fields are required"}, status=status.HTTP_400_BAD_REQUEST
            )

        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            return Response(
                {"error": "Invalid email format"}, status=status.HTTP_400_BAD_REQUEST
            )

        if len(message) < 10:
            return Response(
                {"error": "Message too short"}, status=status.HTTP_400_BAD_REQUEST
            )

        # Store submission
        submission = {
            "name": name,
            "email": email,
            "message": message,
            "timestamp": "2026-02-11",
        }
        contact_submissions.append(submission)

        return Response(
            {"success": True, "message": "Thank you! Your message has been sent."},
            status=status.HTTP_200_OK,
        )
