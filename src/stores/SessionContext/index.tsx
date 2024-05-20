import React, { useEffect, useState } from "react";
import { SessionContextProps } from "./model";
import { Session } from "../../@types/entities";
import { ProviderProps } from "../model";
import { SESSION_KEY } from "./keys";
import api from "../../api";

const initialValue: SessionContextProps = {
    session: null,
    setSession: () => {},
    isInitialized: false,
}

export const SessionContext = React.createContext<SessionContextProps>(initialValue);

function SessionContextProvider({children}: ProviderProps) {

    const [session, setSession] = useState<Session | null>(() => {
        const session = sessionStorage.getItem(SESSION_KEY);
        if (session)
            return  JSON.parse(session);
        else
            return null;
    });
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    useEffect(() => {
        if (session)
            sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
        else
            sessionStorage.removeItem(SESSION_KEY);

        const requestInterceptor = api.interceptors.request.use(
            (config) => {
                if (session)
                    config.headers.Authorization = `Bearer ${session.tokens.access}`;
                return config;
            },
        )

        setIsInitialized(true);

        return () => {
            api.interceptors.response.eject(requestInterceptor);
        };
    }, [session])

    const valueProvider: SessionContextProps = {
        session,
        setSession,
        isInitialized
    }

    return (
        <SessionContext.Provider value={valueProvider} >
            {children}
        </SessionContext.Provider>
    )
}

export default SessionContextProvider;