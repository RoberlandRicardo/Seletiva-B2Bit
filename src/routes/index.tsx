import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import { useContext } from "react";
import { SessionContext } from "../stores/SessionContext";
import PrivateRoutes from "./PrivateRoutes";

function Routes() {

    const { session } = useContext(SessionContext);

    return (
        <BrowserRouter>
            {session ? <PrivateRoutes /> : <PublicRoutes />}
        </BrowserRouter>
    )
}

export default Routes;