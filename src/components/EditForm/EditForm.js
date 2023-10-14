import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { contactSchema } from 'validation/schema';
import { checkExistingName } from 'checkExistingContact';

export function EditForm({ contact, onModalClose }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (editedContact, { resetForm }) => {
    const isNameExist = checkExistingName(contacts, editedContact);
    if (!isNameExist) {
      const editData = { id: contact.id, ...editedContact };
      dispatch(editContact(editData));
      resetForm();
      onModalClose();
    }
  };
  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <ErrorMessage name="name" component="p" />
        <label>
          Number
          <Field type="tel" name="number" />
        </label>
        <ErrorMessage name="number" component="p" />
        <button type="submit" style={{ margin: '0 auto' }}>
          Edit
        </button>
      </Form>
    </Formik>
  );
}
