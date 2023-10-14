import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { registerSchema } from 'validation/schema';
import {
  Button,
  FormField,
  Input,
  InputWrapper,
  Label,
  LabelName,
  Message,
} from './RegisterForm.styled';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';

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
      <FormField>
        <Label>
          <LabelName>Name</LabelName>
          <InputWrapper>
            <AiOutlineUser size={20} />
            <Input type="text" name="name" />
          </InputWrapper>
        </Label>
        <Message name="name" component="p" />
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
        <Button type="submit">Sign up</Button>
      </FormField>
    </Formik>
  );
}
