import { useEffect, useState } from 'react';
import { Teacher } from '../../@types/teacher';
import { ApiService } from '../../services/ApiService';

export function useIndex() {
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    ApiService.get('/professores').then((response) => {
      setTeachersList(response.data);
    });
  }, []);

  function marcarAula() {
    if (selectedTeacher !== null) {
      if (validarDadosAula()) {
        ApiService.post(`/professores/${selectedTeacher.id}/aulas`, {
          name,
          email,
        })
          .then(() => {
            setSelectedTeacher(null);
            alert('Cadastrado com sucesso!');
          })
          .catch((error) => {
            alert(error.response?.data.message);
          });
      } else {
        alert('Preencha os dados corretamente!');
      }
    }
  }

  function validarDadosAula() {
    return name.length > 0 && email.length > 0;
  }

  return {
    teachersList,
    name,
    setName,
    email,
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    marcarAula,
  };
}
