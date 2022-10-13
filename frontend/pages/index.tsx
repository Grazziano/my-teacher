import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { Teacher } from '../src/@types/teacher';
import List from '../src/components/List/List';

const Home: NextPage = () => {
  const teachers: Teacher[] = [
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
  ];

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <List teachers={teachers}></List>
    </Box>
  );
};

export default Home;
