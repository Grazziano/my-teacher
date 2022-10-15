import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Grid,
  TextField,
} from '@mui/material';
import type { NextPage } from 'next';
import List from '../src/components/List/List';
import { useIndex } from '../src/hooks/pages/useIndex';

const Home: NextPage = () => {
  const { teachersList, name, setName, email, setEmail } = useIndex();

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <List teachers={teachersList}></List>
      </Box>
      <Dialog open={true} fullWidth PaperProps={{ sx: { p: 5 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Digite o nome"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite o email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>

        <DialogActions sx={{ mt: 5 }}>
          <Button>Cancelar</Button>
          <Button>Marcar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
