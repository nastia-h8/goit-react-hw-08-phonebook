import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { contactSchema } from 'validation/schema';
import {
  Button,
  FormField,
  Input,
  InputWrapper,
  Label,
  LabelName,
  Message,
} from './EditForm.styled';
import { AiOutlineUser, AiOutlinePhone } from 'react-icons/ai';

export function EditForm({ contact, onModalClose }) {
  const dispatch = useDispatch();

  const handleSubmit = (editedContact, { resetForm }) => {
    const editData = { id: contact.id, ...editedContact };
    dispatch(editContact(editData));
    resetForm();
    onModalClose();
  };
  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <FormField>
        <Label>
          <LabelName>Name</LabelName>
          <InputWrapper>
            <AiOutlineUser size={20} />
            <Input type="text" name="name" autoFocus />
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
        <Button type="submit">Edit</Button>
      </FormField>
    </Formik>
  );
}
