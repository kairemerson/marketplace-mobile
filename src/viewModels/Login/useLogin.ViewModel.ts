import { useForm } from "react-hook-form"
import { LoginFormData, loginScheme } from "./login.scheme"
import { yupResolver } from "@hookform/resolvers/yup"
import { useLoginMutation } from "../../shared/queries/auth/useLogin.mutation"

export const useLoginViewModel = () => {
    
    const {control, handleSubmit} = useForm<LoginFormData>({
        resolver: yupResolver(loginScheme),
        defaultValues: {
            email: '',
            password: ""
        }
    })

    const loginMutation = useLoginMutation()

    const onSubmit = handleSubmit(async (useFormData) => {
        await loginMutation.mutateAsync(useFormData)
    })
    
    return {control, onSubmit}
}