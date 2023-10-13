import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Enter at least 3 characters')
    .max(25, 'Too Long')
    .trim()
    .required('Required'),
  email: yup.string().email('Enter a valid email').trim().required('Required'),
  password: yup
    .string()
    .min(7, 'Enter at least 7 characters')
    .trim()
    .required('Required'),
});

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (userData, { resetForm }) => {
    dispatch(register(userData));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Username
          <Field type="text" name="name" />
        </label>
        <ErrorMessage name="name" component="p" />
        <label>
          Email
          <Field type="email" name="email" />
        </label>
        <ErrorMessage name="email" component="p" />
        <label>
          Password
          <Field type="password" name="password" />
        </label>
        <ErrorMessage name="password" component="p" />
        <button type="submit" style={{ margin: '0 auto' }}>
          Sign up
        </button>
      </Form>
    </Formik>
  );
}
