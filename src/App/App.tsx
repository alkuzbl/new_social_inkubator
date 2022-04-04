import React, { FC } from 'react';
import './styles/App.css';

import { RootRoute } from 'routes/RootRoute';

const App: FC = () => (
  <div>
    <RootRoute isAuth />
  </div>
);

export default App;
