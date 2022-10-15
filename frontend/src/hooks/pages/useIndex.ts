import { useEffect, useState } from 'react';
import { Teacher } from '../../@types/teacher';
import { ApiService } from '../../services/ApiService';

export function useIndex() {
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    ApiService.get('/professores').then((response) => {
      setTeachersList(response.data);
    });
  }, []);

  useEffect(() => {
    limparFormulario();
  }, [selectedTeacher]);

  function marcarAula() {
    if (selectedTeacher !== null) {
      if (validarDadosAula()) {
        ApiService.post(`/professores/${selectedTeacher.id}/aulas`, {
          name,
          email,
        })
          .then(() => {
            setSelectedTeacher(null);
            setMessage('Cadastrado com sucesso!');
          })
          .catch((error) => {
            setMessage(error.response?.data.message);
          });
      } else {
        setMessage('Preencha os dados corretamente!');
      }
    }
  }

  function validarDadosAula() {
    return name.length > 0 && email.length > 0;
  }

  function limparFormulario() {
    setName('');
    setEmail('');
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
    message,
    setMessage,
  };
}
