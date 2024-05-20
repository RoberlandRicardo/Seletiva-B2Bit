import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile";

function PrivateRoutes() {
    
    return (
        <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate replace to="/profile" />} />
        </Routes>
    )
}

export default PrivateRoutes;