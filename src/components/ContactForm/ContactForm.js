import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsAdding } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import { checkExistingName, checkExistingNumber } from 'checkExistingContact';

import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';
import {
  Container,
  Title,
  FormField,
  Label,
  LabelName,
  InputWrapper,
  Button,
  Input,
  Message,
} from './ContactForm.styled';
import { contactSchema } from 'validation/schema';

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

  return (
    <Container>
      <Title>Add new contact</Title>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={contactSchema}
      >
        <FormField autoComplete="off">
          <Label>
            <LabelName>Name</LabelName>
            <InputWrapper>
              <AiOutlineUser size={20} />
              <Input type="text" name="name" />
            </InputWrapper>
          </Label>
          <Message name="name" component="p" />

          <Label>
            <LabelName>Number</LabelName>
            <InputWrapper>
              <AiOutlinePhone size={20} />
              <Input type="tel" name="number" />
            </InputWrapper>
          </Label>
          <Message name="number" component="p" />

          <Button type="submit">{isAdding ? 'Adding...' : 'Add'}</Button>
        </FormField>
      </Formik>
    </Container>
  );
};
