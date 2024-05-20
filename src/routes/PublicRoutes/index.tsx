import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";

function PublicRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
    )
}

export default PublicRoutes;