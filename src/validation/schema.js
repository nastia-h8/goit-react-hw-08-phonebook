import * as yup from 'yup';
import { regex } from './formRegex';

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Enter at least 3 characters')
    .max(30, 'Too Long')
    .trim()
    .matches(regex.name.regex, regex.name.errorMessage)
    .required('Required'),
  number: yup
    .string()
    .min(6, 'Enter at least 6 characters')
    .max(20, 'Too Long')
    .trim()
    .matches(regex.number.regex, regex.number.errorMessage)
    .required('Required'),
});

export const logInSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').trim().required('Required'),
  password: yup
    .string()
    .min(7, 'Password should be of minimum 7 characters length')
    .trim()
    .required('Required'),
});

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Enter at least 3 characters')
    .max(25, 'Too Long')
    .trim()
    .required('Required'),
  email: yup.string().email('Enter a valid email').trim().required('Required'),
  password: yup
    .string()
    .min(7, 'Password should be of minimum 7 characters length')
    .trim()
    .required('Required'),
});
