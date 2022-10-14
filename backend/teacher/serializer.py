from django.forms import ValidationError
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

    def validate_name(self, value):
        if len(value) < 3:
            raise ValidationError("Deve ter pelo menos tres caracteres")
        return value


class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aula
        fields = '__all__'
