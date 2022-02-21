import React from 'react';
import Register from "./pages/register";
import Csv from './pages/Csv';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/csv' element={<Csv/>} />
      </Routes>
    </>
  );
}

export default App;
