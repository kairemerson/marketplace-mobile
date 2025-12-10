import { AuthResponse } from "../api/interfaces/http/auth-response";
import { LoginHttpParams } from "../api/interfaces/http/login";
import { RegisterHttpParams } from "../api/interfaces/http/register";
import {marketPlaceApiClient} from "../api/market-place"

export const register = async (userData: RegisterHttpParams) => {
    const {data} = await marketPlaceApiClient.post<AuthResponse>("/auth/register", userData)

    return data
}

export const login = async (userData: LoginHttpParams) => {
    const {data} = await marketPlaceApiClient.post<AuthResponse>("/auth/login", userData)

    return data
}