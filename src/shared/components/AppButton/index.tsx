import { FC } from "react"
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { ButtonVariants, buttonVariants } from "./button.variants"
import {Ionicons} from "@expo/vector-icons"
import { colors } from "../../../styles/colors"


interface AppButtonProps extends TouchableOpacityProps, ButtonVariants {
    leftIcon?: keyof typeof Ionicons.glyphMap
    rightIcon?: keyof typeof Ionicons.glyphMap
    children: string
}

export const AppButton: FC<AppButtonProps> = ({
    leftIcon, 
    rightIcon,
    children,
    variant = "filled",
    isLoading,
    isDisabled, 
    className,
    ...rest
}) => {

    const contentColor = variant === "filled" ? colors.white : colors["purple-base"]

    const styles = buttonVariants({
        hasIcon: !!leftIcon || !!rightIcon,
        isLoading,
        isDisabled,
        variant
    })

    const renderContent = () => {
        if(isLoading) {
            return (
                <ActivityIndicator size={"small"} color={contentColor}/>
            )
        }

        return (
            <>
                {
                    leftIcon && <Ionicons name={leftIcon} color={contentColor} size={18}/>
                }
                <Text className={styles.text()}>{children}</Text>
                {
                    rightIcon && <Ionicons name={rightIcon} color={contentColor} size={18}/>
                }
                
            </>
        )
    }

    return (
        <TouchableOpacity className={styles.base({className})} {...rest}>
            {renderContent()}
        </TouchableOpacity>
    )
}