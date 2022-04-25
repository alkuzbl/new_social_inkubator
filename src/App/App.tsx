import React, { FC } from 'react';
import './styles/App.css';

import { useSelector } from 'react-redux';

import { RootState } from 'bll/store';
import { RootRoute } from 'routes/RootRoute';

const App: FC = () => {
  const isAuth = useSelector<RootState, boolean>(state => state.app.isAuth);

  return (
    <div>
      <RootRoute isAuth={isAuth} />
    </div>
  );
};

export default App;
