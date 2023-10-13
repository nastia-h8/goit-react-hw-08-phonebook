import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};
const schema = yup.object().shape({
  email: yup.string().email('Enter a valid email').trim().required('Required'),
  password: yup.string().trim().required('Required'),
});

export function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (userData, { resetForm }) => {
    dispatch(logIn(userData));
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
          Log in
        </button>
      </Form>
    </Formik>
  );
}
