import { AuthResponse } from "../api/interfaces/http/auth-response";
import { LoginHttpParams } from "../api/interfaces/http/login";
import { RegisterHttpParams } from "../api/interfaces/http/register";
import { UploadAvatarResponse } from "../api/interfaces/http/upload-avatar";
import {baseURL, marketPlaceApiClient} from "../api/market-place"

export const register = async (userData: RegisterHttpParams) => {
    const {data} = await marketPlaceApiClient.post<AuthResponse>("/auth/register", userData)

    return data
}

export const login = async (userData: LoginHttpParams) => {
    const {data} = await marketPlaceApiClient.post<AuthResponse>("/auth/login", userData)

    return data
}

export const uploadAvatar = async (avatarUri: string) => {
    console.log("chamou uploadAvatar");
    const formData = new FormData()

    formData.append("avatar", {
        uri: avatarUri,
        type: "image/jpeg",
        name: "avatar.jpeg"
    } as unknown as Blob)

    console.log("uploadAvatar in auth.service ====>", formData);
    

    const {data} = await marketPlaceApiClient.post<UploadAvatarResponse>("/user/avatar", formData)

    data.url = `${baseURL}${data.url}`

    return data
}