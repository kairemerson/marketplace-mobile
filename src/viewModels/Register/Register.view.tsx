import { FC, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { AppButton } from "../../shared/components/AppButton";
import { Ionicons } from "@expo/vector-icons";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({onSubmit, control, handleSelectAvatar}) =>{

    const [email, setEmail] = useState("")

    return (
        <KeyboardContainer >
            <ScrollView className="flex-1 px-[40px]">
                <AuthFormHeader title="Crie sua conta" subtitle="Informe seus dados pessoais e de acesso"/>

                <TouchableOpacity onPress={handleSelectAvatar}>
                    <Ionicons name="cloud-upload-outline" size={32}/>
                </TouchableOpacity>

                <AppInputController
                    control={control}
                    name="name"
                    label="NOME"
                    leftIcon="person-outline" 
                    placeholder="Seu nome completo"
                />

                <AppInputController
                    control={control}
                    name="phone"
                    label="TELEFONE"
                    leftIcon="call-outline" 
                    placeholder="(00) 00000-0000"
                />

                <Text className="text-base mt-6 font-bold text-gray-500">Acesso</Text>

                <AppInputController
                    control={control}
                    name="email"
                    label="EMAIL"
                    leftIcon="mail-outline" 
                    placeholder="mail@examplo.com"
                />

                <AppInputController
                    control={control}
                    name="password"
                    label="SENHA"
                    leftIcon="lock-closed-outline" 
                    secureTextEntry
                    placeholder="Sua senha"
                />

                <AppInputController
                    control={control}
                    name="confirmPassword"
                    label="CONFIRMAR SENHA"
                    leftIcon="lock-closed-outline" 
                    secureTextEntry
                     placeholder="Confirme a senha"
                />

                <AppButton className="mt-6" onPress={onSubmit}>
                    Registrar
                </AppButton>

                <View className="mt-16">
                    <Text className="text-base text-gray-300 mb-6 ">Já tem uma conta?</Text>
                    <AppButton variant="outlined" onPress={() => router.push("/login")}>
                        login
                    </AppButton>
                </View>

            </ScrollView>
        </KeyboardContainer>
    )
}