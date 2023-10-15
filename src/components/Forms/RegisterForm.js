import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { register } from 'redux/auth/operations';
import { registerSchema } from 'validation/schema';
import { Loader } from 'components/Loader';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

export function RegisterForm() {
  const { isRegister } = useAuth();
  const dispatch = useDispatch();

  const handleSubmit = (userData, { resetForm }) => {
    dispatch(register(userData));
    resetForm();
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: registerSchema,
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
                <PersonOutlineRoundedIcon />
              </InputAdornment>
            ),
          }}
          required
          type="text"
          id="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
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
          {isRegister ? <Loader /> : 'Sign up'}
        </Button>
      </Stack>
    </Box>
  );
}
