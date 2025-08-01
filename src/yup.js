import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  age: yup
    .number()
    .required('Age is required')
    .positive('Age must be positive')
    .integer('Age must be an integer'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone is required'),
  select: yup.string().required('Select an option'),
  password: yup.string().required('Password is required').min(6, 'Minimum 6 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
  radioType: yup.string().required('Select a type'),
  rememberMe: yup.boolean().oneOf([true], 'You must accept to continue'),
});

export const formOptions = {
  resolver: yupResolver(validationSchema),
  mode: 'onTouched',
};
