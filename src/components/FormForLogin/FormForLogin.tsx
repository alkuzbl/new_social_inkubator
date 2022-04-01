import React, { FC, useState } from 'react';

import { Link } from 'react-router-dom';
import * as yup from 'yup';

import passwordIcon from 'assets/images/password_icon.svg';
import emailIcon from 'assets/images/user_icon.svg';
import { Form } from 'components';
import { CheckBox } from 'components/common/CheckBox/CheckBox';
import { InputForForm } from 'components/InputForForm/InputForForm';

const styleForInput = { marginBottom: '20px' };
const MIN_PASSWORD = 7;
const MAX_PASSWORD = 16;
export const loginValidationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(MIN_PASSWORD, 'The password must be at least 7 characters')
    .max(MAX_PASSWORD),
});

export const FormForLogin: FC = () => {
  const [rememberMe, setRememberMe] = useState<{ rememberMe: boolean }>({
    rememberMe: false,
  });
  const handleChangeRememberMe = (value: boolean): void =>
    setRememberMe({ rememberMe: value });
  const handleSubmit = (data: any): void => {
    console.log({ ...data, ...rememberMe });
  };
  return (
    <Form defaultValues={loginValidationSchema} onSubmit={handleSubmit}>
      <h6 style={{ marginBottom: '30px', fontSize: '18px' }}>Sign in</h6>
      <InputForForm
        name="email"
        icon={emailIcon}
        type="email"
        style={styleForInput}
        placeholder="Email"
      />
      <InputForForm
        name="password"
        icon={passwordIcon}
        type="password"
        style={styleForInput}
        placeholder="Password"
      />

      <div
        style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}
      >
        <CheckBox
          label="RememberMe"
          name="rememberMe"
          value={rememberMe.rememberMe}
          onChange={handleChangeRememberMe}
        />
        <Link style={{ color: 'inherit', fontSize: '14px' }} to="/forgot">
          Forgot password
        </Link>
      </div>

      <button
        style={{
          border: 'none',
          borderRadius: '5px',
          backgroundColor: '#E44D3A',
          padding: '12px 27px',
          fontSize: '16px',
          color: '#ffffff',
          cursor: 'pointer',
        }}
        type="submit"
      >
        Sign in
      </button>
    </Form>
  );
};
