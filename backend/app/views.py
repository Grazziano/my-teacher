from rest_framework.views import APIView
from rest_framework.response import Response

class HomeApiView(APIView):
    def get(self, request, format=None):
        return Response({'nome': 'Grazziano', 'idade': 33}, status=200)
