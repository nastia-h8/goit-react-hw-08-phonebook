import { useDispatch } from 'react-redux';
import { sortAscName, sortDescName } from 'redux/contacts/slice';
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from 'react-icons/ai';
import { Button, Stack, Typography } from '@mui/material';

export function SortingBar() {
  const dispatch = useDispatch();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="subtitle1" align="center">
        Sort by name
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Button
          variant="contained"
          type="button"
          onClick={() => dispatch(sortAscName())}
        >
          <AiOutlineSortAscending size={20} />
        </Button>
        <Button
          variant="contained"
          type="button"
          onClick={() => dispatch(sortDescName())}
        >
          <AiOutlineSortDescending size={20} />
        </Button>
      </Stack>
    </Stack>
  );
}
