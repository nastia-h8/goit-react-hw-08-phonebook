import { useDispatch } from 'react-redux';
import { changeNameFilter } from 'redux/filter/slice';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment, Stack, Typography } from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export function ContactFilter() {
  const dispatch = useDispatch();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
    >
      <Typography variant="subtitle1">Find contacts by name</Typography>
      <Box
        marginTop={4}
        component="form"
        sx={{
          '& .MuiTextField-root': { width: '30ch' },
        }}
      >
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchRoundedIcon />
              </InputAdornment>
            ),
          }}
          type="text"
          name="filter"
          id="filter"
          variant="outlined"
          placeholder="Enter name..."
          onChange={e => {
            dispatch(changeNameFilter(e.target.value));
          }}
        />
      </Box>
    </Stack>
  );
}
