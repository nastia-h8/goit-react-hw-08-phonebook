import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { registerSchema } from 'validation/schema';

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (userData, { resetForm }) => {
    dispatch(register(userData));
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
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
