import React, { FC, useState } from 'react';

import { Link } from 'react-router-dom';

import passwordIcon from 'assets/images/password_icon.svg';
import emailIcon from 'assets/images/user_icon.svg';
import { Form } from 'components';
import { CheckBox } from 'components/common/CheckBox/CheckBox';
import { InputForForm } from 'components/InputForForm/InputForForm';
import { loginValidationSchema } from 'utils/validationShemes';

const styles = {
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
  },
};

export const FormForLogin: FC = () => {
  const [checked, setChecked] = useState<{ rememberMe: boolean }>({
    rememberMe: false,
  });

  const handleChangeRememberMe = (value: boolean): void =>
    setChecked({ rememberMe: value });

  const handleSubmit = (data: { email: string; password: string }): void => {
    console.log({ ...data, ...checked });
  };

  return (
    <Form defaultValues={loginValidationSchema} onSubmit={handleSubmit}>
      <h6 style={styles.title}>Sign in</h6>
      <InputForForm
        name="email"
        icon={emailIcon}
        type="email"
        placeholder="Email"
        autoComplete="on"
      />
      <InputForForm
        name="password"
        icon={passwordIcon}
        type="password"
        placeholder="Password"
        autoComplete="on"
      />

      <div style={styles.inner}>
        <CheckBox
          label="RememberMe"
          name="rememberMe"
          value={checked.rememberMe}
          onChange={handleChangeRememberMe}
        />
        <Link style={styles.link} to="/forgot">
          Forgot password
        </Link>
      </div>

      <button style={styles.button} type="submit">
        Sign in
      </button>
    </Form>
  );
};
