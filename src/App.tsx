import React from 'react';

import './App.css';
import {Header} from "./components/Header/Header";
import {NewPost} from "./components/MainPage/PostBar/NewPost/NewPost";

function App() {
  return (
    <div>
      <Header/>
        <NewPost/>
    </div>
  );
}

export default App;
