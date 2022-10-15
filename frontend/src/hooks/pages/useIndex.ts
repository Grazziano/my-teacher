import { useEffect, useState } from 'react';
import { Teacher } from '../../@types/teacher';
import { ApiService } from '../../services/ApiService';

export function useIndex() {
  const [teachersList, setTeachersList] = useState<Teacher[]>([]);

  useEffect(() => {
    ApiService.get('/professores').then((response) => {
      setTeachersList(response.data);
    });
  }, []);

  return {
    teachersList,
  };
}
