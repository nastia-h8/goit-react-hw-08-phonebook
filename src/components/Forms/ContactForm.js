import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsAdding } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import {
  checkExistingName,
  checkExistingNumber,
} from 'validation/checkExistingContact';

import { contactSchema } from 'validation/schema';
import { Loader } from 'components/Loader';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { Typography } from '@mui/material';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isAdding = useSelector(selectIsAdding);

  const handleSubmit = (contact, { resetForm }) => {
    const isNameExist = checkExistingName(contacts, contact);
    const isNumberExist = checkExistingNumber(contacts, contact);

    if (!isNameExist && !isNumberExist) {
      dispatch(addContact(contact));
      resetForm();
    }
  };

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: contactSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" sx={{ mb: 0 }}>
          Add new contact
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
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
              {isAdding ? <Loader /> : 'Add contact'}
            </Button>
          </Stack>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
