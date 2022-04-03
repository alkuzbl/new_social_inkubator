import React, { FC, useState } from 'react';

import countryIcon from 'assets/images/country.svg';
import emailIcon from 'assets/images/email.svg';
import passwordIcon from 'assets/images/password_icon.svg';
import userIcon from 'assets/images/user_icon.svg';
import { CheckBox } from 'components/common/CheckBox/CheckBox';
import { Form } from 'components/Form';
import {
  InputForForm,
  InputForFormPropsType,
} from 'components/InputForForm/InputForForm';
import { signUpValidationSchema } from 'utils/validationShemes';

const styles = {
  container: { padding: '0 60px' },
  title: { marginBottom: '30px', fontSize: '18px' },
  inner: { display: 'flex', justifyContent: 'space-between', marginBottom: '30px' },
  link: { color: 'inherit', fontSize: '14px' },
  button: {
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#E44D3A',
    padding: '12px 27px',
    fontSize: '16px',
    color: '#ffffff',
    cursor: 'pointer',
    marginBottom: '30px',
  },
  disabled: {
    opacity: '0.8',
  },
};

type SignUpData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  country: string;
};

const inputFields: Omit<InputForFormPropsType, 'register' & 'errors'>[] = [
  {
    name: 'email',
    placeholder: 'Email',
    icon: emailIcon,
    type: 'email',
    autoComplete: 'email',
  },
  {
    name: 'fullName',
    placeholder: 'Full name',
    icon: userIcon,
    type: 'text',
    autoComplete: 'name',
  },
  {
    name: 'country',
    placeholder: 'Country',
    icon: countryIcon,
    type: 'text',
    autoComplete: 'off',
  },
  {
    name: 'password',
    placeholder: 'Password',
    icon: passwordIcon,
    type: 'password',
    autoComplete: 'new-password',
  },
  {
    name: 'confirmPassword',
    placeholder: 'Repeat password',
    icon: passwordIcon,
    type: 'password',
    autoComplete: 'off',
  },
];

export const SignUp: FC = () => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleClickCheckbox = (value: boolean): void => setChecked(value);

  const onSubmit = (data: SignUpData): void => {
    const signUpDataForRequest = { ...data };

    delete signUpDataForRequest.confirmPassword;

    console.log(signUpDataForRequest);
  };

  return (
    <div style={styles.container}>
      <h6 style={styles.title}>Sign up</h6>
      <Form onSubmit={onSubmit} defaultValues={signUpValidationSchema}>
        {inputFields.map(({ name, icon, autoComplete, placeholder, type }) => (
          <InputForForm
            key={name}
            name={name}
            icon={icon}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
          />
        ))}

        <div style={styles.inner}>
          <CheckBox
            name="rules"
            value={checked}
            onChange={handleClickCheckbox}
            label="Yes, I understand and agree to the IT-Incubator Terms & Conditions."
          />
        </div>

        <button
          style={checked ? styles.button : { ...styles.button, ...styles.disabled }}
          type="submit"
          disabled={!checked}
        >
          Sign Up
        </button>
      </Form>
    </div>
  );
};
