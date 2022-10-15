import { useEffect, useState } from 'react';
import { Teacher } from '../../@types/teacher';
import { ApiService } from '../../services/ApiService';

export function useIndex() {
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    ApiService.get('/professores').then((response) => {
      setTeachersList(response.data);
    });
  }, []);

  return {
    teachersList,
    name,
    setName,
    email,
    setEmail,
  };
}
