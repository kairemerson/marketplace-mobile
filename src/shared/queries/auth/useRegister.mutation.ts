import { useMutation } from "@tanstack/react-query"
import * as authService from "../../services/auth.service"
import { RegisterHttpParams } from "../../api/interfaces/http/register"
import { AuthResponse } from "../../api/interfaces/http/auth-response"
import { useUserStore } from "../../store/user-store"

interface UseRegisterMutation {
    onSuccess?: () => void
}

export const useRegisterMutation = ({onSuccess}: UseRegisterMutation = {}) => {

    const {setSession} = useUserStore()

    const mutation = useMutation({
        mutationFn: (userData: RegisterHttpParams) => authService.register(userData),
        onSuccess: (response) => {
            setSession({
                refreshToken: response.refreshToken,
                token: response.token,
                user: response.user
            })
            onSuccess?.()
        },
        onError: (error) => {
            console.log(error);
            
        }
    })

    return mutation
}