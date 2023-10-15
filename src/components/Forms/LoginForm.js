import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { logInSchema } from 'validation/schema';
import { Loader } from 'components/Loader';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';

export function LoginForm() {
  const { isLoggingIn } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = (userData, { resetForm }) => {
    dispatch(logIn(userData));
    resetForm();
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: logInSchema,
    onSubmit: handleSubmit,
  });
  return (
    <Box
      marginTop={4}
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        '& .MuiTextField-root': { width: '40ch' },
      }}
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineRoundedIcon />
              </InputAdornment>
            ),
          }}
          required
          type="email"
          id="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenRoundedIcon />
              </InputAdornment>
            ),
          }}
          required
          id="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button variant="contained" type="submit">
          {isLoggingIn ? <Loader /> : 'Log in'}
        </Button>
      </Stack>
    </Box>
  );
}
