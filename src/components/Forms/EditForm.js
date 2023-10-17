import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { contactSchema } from 'validation/schema';

import toast from 'react-hot-toast';
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';

export function EditForm({ contact, onModalClose }) {
  const dispatch = useDispatch();

  const handleSubmit = (editedContact, { resetForm }) => {
    const isNotChanged =
      editedContact.name === contact.name &&
      editedContact.number === contact.number;

    if (isNotChanged) {
      toast.error('Please, change something...');
      return;
    }

    const editData = { id: contact.id, ...editedContact };
    dispatch(editContact(editData));
    resetForm();
    onModalClose();
  };

  const formik = useFormik({
    initialValues: { name: contact.name, number: contact.number },
    validationSchema: contactSchema,
    onSubmit: handleSubmit,
  });
  return (
    <Box marginTop={4} component="form" onSubmit={formik.handleSubmit}>
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
                <PhoneAndroidRoundedIcon />
              </InputAdornment>
            ),
          }}
          required
          type="tel"
          id="number"
          label="Number"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button variant="contained" type="submit">
          Edit
        </Button>
      </Stack>
    </Box>
  );
}
