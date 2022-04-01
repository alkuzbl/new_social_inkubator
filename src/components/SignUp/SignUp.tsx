import React, { FC } from 'react';

import countryIcon from 'assets/images/country.svg';
import emailIcon from 'assets/images/email.svg';
import passwordIcon from 'assets/images/password_icon.svg';
import userIcon from 'assets/images/user_icon.svg';
import { Input } from 'components/common';
import { CheckBox } from 'components/common/CheckBox/CheckBox';

export const SignUp: FC = () => {
  const handleClickCheckbox = (checked: boolean): void => {
    console.log(checked);
  };
  const signUp = (): void => {
    console.log('click - signUp');
  };
  return (
    <div style={{ padding: '0 60px' }}>
      <h6 style={{ marginBottom: '30px', fontSize: '18px' }}>Sign up</h6>
      <div style={{ marginBottom: '20px' }}>
        <Input
          value=""
          name="email"
          onChange={() => {}}
          placeholder="Email"
          icon={emailIcon}
          type="email"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Input
          value=""
          name="fullName"
          onChange={() => {}}
          placeholder="Full name"
          icon={userIcon}
          type="text"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Input
          value=""
          name="country"
          onChange={() => {}}
          placeholder="Country"
          icon={countryIcon}
          type="text"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Input
          value=""
          name="password"
          placeholder="Password"
          onChange={() => {}}
          icon={passwordIcon}
          type="password"
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Input
          value=""
          name="repeatPassword"
          placeholder="Repeat password"
          onChange={() => {}}
          icon={passwordIcon}
          type="password"
        />
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}
      >
        <CheckBox
          name="rules"
          onChange={handleClickCheckbox}
          label="Yes, I understand and agree to the IT-Incubator Terms & Conditions."
        />
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
        onClick={signUp}
      >
        Sign Up
      </button>
    </div>
  );
};
