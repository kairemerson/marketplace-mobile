import { Pressable, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import { appInputVariants, AppInputVariantsProps } from "./input.variants"
import {Ionicons} from "@expo/vector-icons"
import { FC } from "react"
import { useAppInputViewModel } from "./useAppInputViewModel"

export interface AppInputProps extends TextInputProps, AppInputVariantsProps {
    label?: string
    leftIcon?: keyof typeof Ionicons.glyphMap
    rightIcon?: keyof typeof Ionicons.glyphMap
    containerClassName?: string
    error?: string
    mask?: (value: string) => void | string 
}

export const AppInput:FC<AppInputProps> = ({
    label, 
    leftIcon, 
    rightIcon, 
    containerClassName, 
    value,
    isError,
    secureTextEntry=false,
    onBlur,
    onFocus,
    onChangeText,
    mask,
    isDisabled,
    error, 
    ...textInputProps}) => {

    const { 
        getIconColor,
        handleWrapperPress,
        handlePasswordToggle,
        handleFocus,
        handleBlur,
        handleTextChange,
        isFocused,
        showPassword
    } = useAppInputViewModel({
        onBlur,
        onFocus,
        isError: !!error,
        mask,
        onChangeText,
        isDisabled,
        secureTextEntry,
        value,
    })
    const styles = appInputVariants({
        isFocused,
        isDisabled,
        isError: !!error
    })

    return (
        <View className={styles.container({className: containerClassName})}>
            <Text className={styles.label()}>{label}</Text>
            <Pressable className={styles.wrapper()}>
                {leftIcon && (
                    <Ionicons color={getIconColor()} className="mr-3" name={leftIcon} size={22}/>
                )}

                <TextInput 
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    className={styles.input()}
                    onChangeText={handleTextChange}
                    value={value}
                    secureTextEntry={showPassword}
                    {...textInputProps}
                />

                {secureTextEntry && (
                    <TouchableOpacity onPress={handlePasswordToggle} activeOpacity={0.7}>
                        <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={22}/>
                    </TouchableOpacity>
                )}
            </Pressable>
            {error && (
                <Text className={styles.error()}>
                    <Ionicons name="alert-circle-outline" className="ml-2"/> {error}
                </Text>
            )}
        </View>
    )
}