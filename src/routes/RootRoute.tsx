import React, { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header, Login } from 'components';
import { SignUp } from 'components/SignUp/SignUp';
import { HomePage, MessagesPage, Profiles } from 'view';
import { LoginPage } from 'view/LoginPage';

type RootRoutePropsType = {
  isAuth: boolean;
};

export const RootRoute: FC<RootRoutePropsType> = ({ isAuth }) => {
  if (isAuth) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="profiles" element={<Profiles />} />
          <Route path="messages" element={<MessagesPage />} />
        </Routes>
      </>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<SignUp />} />
      </Route>
    </Routes>
  );
};
