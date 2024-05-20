import { Session } from "../../@types/entities";

export interface SessionContextProps {
    session: Session | null,
    setSession: React.Dispatch<React.SetStateAction<Session | null>>,
    isInitialized: boolean,
}