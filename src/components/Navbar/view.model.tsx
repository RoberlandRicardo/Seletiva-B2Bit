import { useContext } from "react";
import { SessionContext } from "../../stores/SessionContext";

const useNavBarViewModel = () => {

    const {setSession} = useContext(SessionContext);

    async function executeLogout() {
        setSession(null);
    }

    return {
        executeLogout
    }
}

export default useNavBarViewModel;