import { ReactNode } from "react";
import { create } from "zustand";

interface BottomSheetConfig {
    snapPoints?: string[]
    enablePanDownToClose?: boolean
}

interface BottomShetStore {
    isOpen: boolean
    content: ReactNode | null
    config: BottomSheetConfig
    open: (content: {content: ReactNode, config?: BottomSheetConfig}) => void
    close: () => void
}

const defaultConfig: BottomSheetConfig = {
    snapPoints: ["80%", "90%"],
    enablePanDownToClose: true
}

export const useBottomSheetStore = create<BottomShetStore>((set) => ({
    isOpen: false,
    content: null,
    config: defaultConfig,
    open: ({config, content}) => set({
        isOpen: true,
        config: {...defaultConfig, ...config},
        content
    }),
    close: () => set({
        isOpen: false,
        content: null,
        config: defaultConfig
    })
}))