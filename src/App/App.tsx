import React from 'react';

import {
    Routes,
    Route
} from "react-router-dom";

import './App.css';
import {Header} from "../components/Header/Header";
import {Profiles} from "../view/profilesPage/Profiles";
import {MessagesPage} from "../view/messagesPage/MessagesPage";
import {HomePage} from "../view/homePage/HomePage";




function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='home' element={<HomePage />}  />
                <Route path='profiles' element={<Profiles />}  />
                <Route path='messages' element={<MessagesPage />}  />
            </Routes>
        </div>
    );
}

export default App;
