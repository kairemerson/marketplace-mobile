import { FC, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({onSubmit, control}) =>{

    const [email, setEmail] = useState("")

    return (
        <KeyboardContainer >
            <ScrollView className="flex-1 px-[40px]">
                <AuthFormHeader title="Crie sua conta" subtitle="Informe seus dados pessoais e de acesso"/>

                <AppInputController
                    control={control}
                    name="name"
                    label="NOME"
                    leftIcon="person-outline" 
                />

                <AppInputController
                    control={control}
                    name="email"
                    label="EMAIL"
                    leftIcon="mail-outline" 
                />

                <AppInputController
                    control={control}
                    name="phone"
                    label="TELEFONE"
                    leftIcon="call-outline" 
                />

                <AppInputController
                    control={control}
                    name="password"
                    label="SENHA"
                    leftIcon="lock-closed-outline" 
                    secureTextEntry
                />

                <AppInputController
                    control={control}
                    name="confirmPassword"
                    label="CONFIRMAR SENHA"
                    leftIcon="lock-closed-outline" 
                    secureTextEntry
                />

                <TouchableOpacity>
                    <Text>Registrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/login")}>
                    <Text>login</Text>
                </TouchableOpacity>

            </ScrollView>
        </KeyboardContainer>
    )
}