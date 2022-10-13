import { Box } from '@mui/material';
import type { NextPage } from 'next';
import List from '../src/components/List/List';

const Home: NextPage = () => {
  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <List></List>
    </Box>
  );
};

export default Home;
