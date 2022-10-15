import { Button } from '@mui/material';
import { Teacher } from '../../@types/teacher';
import { FormatadorService } from '../../services/FormatadorService';
import {
  Description,
  EmptyList,
  Information,
  ListItem,
  ListStyled,
  Name,
  Photo,
  Value,
} from './List.style';

interface ListProps {
  teachers: Teacher[];
  onSelect: (teacher: Teacher) => void;
}

const List = (props: ListProps) => {
  return (
    <div>
      {props.teachers.length > 0 ? (
        <ListStyled>
          {props.teachers.map((teacher) => (
            <ListItem key={teacher.id}>
              <Photo src={teacher.photo}></Photo>
              <Information>
                <Name>{teacher.name}</Name>
                <Value>
                  {FormatadorService.valorMonetario(teacher.hour_value)} por
                  hora
                </Value>
                <Description>
                  {FormatadorService.limitarTexto(teacher.description, 200)}
                </Description>
                <Button
                  onClick={() => props.onSelect(teacher)}
                  sx={{ width: '70%' }}
                >
                  Marcar Aula com {teacher.name}
                </Button>
              </Information>
            </ListItem>
          ))}
        </ListStyled>
      ) : (
        <EmptyList>Nenhum item encontrado</EmptyList>
      )}
    </div>
  );
};

export default List;
