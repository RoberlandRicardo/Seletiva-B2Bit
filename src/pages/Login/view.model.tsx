import { useContext, useState } from "react";
import { executeAuthenticate } from "../../services/authenticate";
import { SessionContext } from "../../stores/SessionContext";
import { AxiosError } from "axios";

const useLoginViewModel = () => {

    const { setSession } = useContext(SessionContext);

    const [showErrNotFound, setShowErrNotFound] = useState<boolean>(false);
    const [showErrEmpty, setShowErrEmpty] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    async function executeLogin()  {

        if (username.length == 0 || password.length == 0) {
            setShowErrNotFound(false);
            setShowErrEmpty(true);
            return;
        } else {
            setShowErrEmpty(false);
        }
        
        await executeAuthenticate({
                email: username,
                password: password,
            },
            (response) => {
                if (response.status! >= 200 && response.status! < 300) {
                    setShowErrNotFound(false);
                    setSession(response.data);
                }
            },
            (err) => {
                if (err.response!.status == 401) {
                    setShowErrNotFound(true)
                }
            }
        );
    }

    return {
        showErrEmpty,
        showErrNotFound,
        username,
        setUsername,
        password,
        setPassword,
        executeLogin,
    }
}

export default useLoginViewModel;