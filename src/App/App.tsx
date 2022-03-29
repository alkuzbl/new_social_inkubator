import React, { FC } from 'react';
import './styles/App.css';

import { RootRoute } from 'routes/RootRoute';

const App: FC = () => (
  <div>
    <RootRoute isAuth={false} />
  </div>
);

export default App;
