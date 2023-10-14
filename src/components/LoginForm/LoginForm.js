import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { logInSchema } from 'validation/schema';

export function LoginForm() {
  const dispatch = useDispatch();
  const handleSubmit = (userData, { resetForm }) => {
    dispatch(logIn(userData));
    resetForm();
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={logInSchema}
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
