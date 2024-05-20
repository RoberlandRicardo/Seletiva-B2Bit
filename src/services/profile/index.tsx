import axios, { AxiosError, AxiosResponse } from "axios";
import api from "../../api"

export const getProfile = async (
    callbackSuccess? : (ar: AxiosResponse) => any,
    callBackError? : (ar: AxiosError) => any
) : 
    Promise<AxiosResponse<any, any> | null | AxiosError> => {

    try {
        const response = await api.get(
            'auth/profile/',
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