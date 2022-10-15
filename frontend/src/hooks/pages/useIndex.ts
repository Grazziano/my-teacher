import { useState } from 'react';
import { Teacher } from '../../@types/teacher';

export function useIndex() {
  const [teachersList, setTeachersList] = useState<Teacher[]>([
    {
      id: 1,
      name: 'Professor 1',
      photo: 'https://github.com/grazziano.png',
      description: 'Descrição do professor 1',
      hour_value: 100,
    },
    {
      id: 2,
      name: 'Professor 2',
      photo: 'https://github.com/grazziano.png',
      description: 'Descrição do professor 2',
      hour_value: 200,
    },
    {
      id: 3,
      name: 'Professor 3',
      photo: 'https://github.com/grazziano.png',
      description: 'Descrição do professor 3',
      hour_value: 300,
    },
    {
      id: 4,
      name: 'Professor 4',
      photo: 'https://github.com/grazziano.png',
      description: 'Descrição do professor 4',
      hour_value: 400,
    },
  ]);

  return {
    teachersList,
  };
}
