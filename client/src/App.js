import React from 'react';
import Register from "./pages/Register";
import Csv from "./pages/admin/Csv.Registration";
import BulkEmail from './pages/admin/BulkEmail.Registration';
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
