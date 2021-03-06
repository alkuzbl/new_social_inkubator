import React, { FC } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

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
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </>
    );
  }
  return (
    <Routes>
      <Route path="/*" element={<LoginPage />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<SignUp />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Route>
    </Routes>
  );
};
