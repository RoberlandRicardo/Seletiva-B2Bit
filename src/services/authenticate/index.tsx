import axios, { AxiosError, AxiosResponse } from "axios";
import api from "../../api"
import { AuthenticateDTO } from "./model";

export const executeAuthenticate = async (
        data: AuthenticateDTO,
        callbackSuccess? : (ar: AxiosResponse) => any,
        callBackError? : (ar: AxiosError) => any
    ) : 
    Promise<AxiosResponse<any, any> | null | AxiosError> => {
    try {
        const response = await api.post(
            'auth/login/',
            data,
        );

        callbackSuccess && callbackSuccess(response);
        return response;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            callBackError && callBackError(err);
            return err;
        } else {
            return null;
        }
    }
}