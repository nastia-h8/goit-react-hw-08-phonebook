import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { logInSchema } from 'validation/schema';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import {
  Button,
  FormField,
  Input,
  InputWrapper,
  Label,
  LabelName,
  Message,
} from './LoginForm.styled';

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
      <FormField>
        <Label>
          <LabelName>Email</LabelName>
          <InputWrapper>
            <AiOutlineMail size={20} />
            <Input type="email" name="email" />
          </InputWrapper>
        </Label>
        <Message name="email" component="p" />
        <Label>
          <LabelName>Password</LabelName>
          <InputWrapper>
            <AiOutlineLock size={20} />
            <Input type="password" name="password" />
          </InputWrapper>
        </Label>
        <Message name="password" component="p" />
        <Button type="submit">Log in</Button>
      </FormField>
    </Formik>
  );
}
