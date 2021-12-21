import React from 'react';

import './App.css';
import {Header} from "../components/Header/Header";
import {Profiles} from "../view/profilesPage/Profiles";




function App() {
    return (
        <div>
            <Header/>
            <Profiles />
        </div>
    );
}

export default App;
