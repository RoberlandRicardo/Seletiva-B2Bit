import { useContext, useEffect, useState } from "react";
import { getProfile } from "../../services/profile";
import { Profile } from "../../@types/entities";
import { SessionContext } from "../../stores/SessionContext";

const useProfileViewModel = () => {

    const {isInitialized} = useContext(SessionContext);

    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        if (isInitialized)
            loadProfile();
    }, [isInitialized])

    async function loadProfile() {
        await getProfile(
            (response) => {
                if (response.status >= 200 && response.status < 300) {
                    setProfile({...response.data});
                }
            },
        );
    }

    return {
        profile,
    }
}

export default useProfileViewModel;