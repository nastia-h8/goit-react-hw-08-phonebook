import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
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
import { Loader } from 'components/Loader/Loader';

export function RegisterForm() {
  const { isRegister } = useAuth();
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
        <Button type="submit">
          {isRegister ? <Loader size={18} /> : 'Sign up'}
        </Button>
      </FormField>
    </Formik>
  );
}
