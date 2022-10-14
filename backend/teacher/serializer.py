from rest_framework import serializers
from teacher.models import Teacher, Aula


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        # fields = ('id', 'name', 'hour_value', 'description', 'photo')
        fields = ('__all__')


class CadastrarAulaSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)


class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'
