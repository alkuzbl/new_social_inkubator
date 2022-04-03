import * as yup from 'yup';

const MIN_NUMBER_CHARACTERS_PASSWORD = 7;
const MAX_NUMBER_CHARACTERS_PASSWORD = 16;
const MIN_NUMBER_CHARACTERS_NAME = 3;

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(
      MIN_NUMBER_CHARACTERS_PASSWORD,
      `The password must be at least ${MIN_NUMBER_CHARACTERS_PASSWORD} characters`,
    )
    .max(MAX_NUMBER_CHARACTERS_PASSWORD),
});

export const signUpValidationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required()
    .min(MIN_NUMBER_CHARACTERS_NAME, 'Your name must be at least 3 characters long'),
  country: yup.string().required(),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(
      MIN_NUMBER_CHARACTERS_PASSWORD,
      `The password must be at least ${MIN_NUMBER_CHARACTERS_PASSWORD} characters`,
    )
    .max(
      MAX_NUMBER_CHARACTERS_PASSWORD,
      `The maximum password length is no more than ${MAX_NUMBER_CHARACTERS_PASSWORD} characters`,
    ),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
