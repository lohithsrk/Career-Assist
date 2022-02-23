import React from "react";
import Register from "./pages/Register";
import Csv from "./pages/admin/CsvRegistration";
import BulkEmail from "./pages/admin/BulkEmailRegistration";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/csv" element={<Csv />} />
                <Route exact path="/bulkemail" element={<BulkEmail />} />
            </Routes>
        </>
    );
}

export default App;
