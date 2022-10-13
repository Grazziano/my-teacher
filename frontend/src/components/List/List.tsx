import { Button } from '@mui/material';
import {
  Description,
  Information,
  ListItem,
  ListStyled,
  Name,
  Photo,
  Value,
} from './List.style';

const List = () => {
  return (
    <ListStyled>
      <ListItem>
        <Photo src="https://github.com/grazziano.png"></Photo>
        <Information>
          <Name>Grazziano Fagundes</Name>
          <Value>R$ 100,00 por hora</Value>
          <Description>Aulas de Programação</Description>
          <Button sx={{ width: '70%' }}>Marcar Aula com Grazziano</Button>
        </Information>
      </ListItem>

      <ListItem>
        <Photo src="https://github.com/grazziano.png"></Photo>
        <Information>
          <Name>Grazziano Fagundes</Name>
          <Value>R$ 100,00 por hora</Value>
          <Description>Aulas de Programação</Description>
          <Button sx={{ width: '70%' }}>Marcar Aula com Grazziano</Button>
        </Information>
      </ListItem>

      <ListItem>
        <Photo src="https://github.com/grazziano.png"></Photo>
        <Information>
          <Name>Grazziano Fagundes</Name>
          <Value>R$ 100,00 por hora</Value>
          <Description>Aulas de Programação</Description>
          <Button sx={{ width: '70%' }}>Marcar Aula com Grazziano</Button>
        </Information>
      </ListItem>

      <ListItem>
        <Photo src="https://github.com/grazziano.png"></Photo>
        <Information>
          <Name>Grazziano Fagundes</Name>
          <Value>R$ 100,00 por hora</Value>
          <Description>Aulas de Programação</Description>
          <Button sx={{ width: '70%' }}>Marcar Aula com Grazziano</Button>
        </Information>
      </ListItem>
    </ListStyled>
  );
};

export default List;
