import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guesser from "./guesser/pages/GuesserOverview";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Guesser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;