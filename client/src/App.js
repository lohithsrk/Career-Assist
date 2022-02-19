import React from 'react';
import Register from "./pages/Register";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
