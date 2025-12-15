import BottomSheet, {BottomSheetScrollView, BottomSheetBackdrop, BottomSheetBackdropProps} from '@gorhom/bottom-sheet'
import { useBottomSheetStore } from '../../store/bottomsheet-store'
import { useCallback, useEffect, useMemo, useRef } from 'react'
import { colors } from '../../../styles/colors'

export const AppBottomSheet = () => {

    const {content, close, isOpen, config} = useBottomSheetStore()

    const bottomsheetRef = useRef<BottomSheet>(null)

    const snapPoints = useMemo(() => {
        config?.snapPoints || ["80%", "90%"]
    }, [config?.snapPoints])

    const handleSheetChanges = useCallback((index: number) => {
        if(index === -1) {
            close()
        }
    }, [close])

    const renderBackdrop = useCallback((props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} opacity={0.7} pressBehavior={"close"}/>
    ), [])

    useEffect(() => {
        if(isOpen && content) {
            bottomsheetRef.current?.snapToIndex(0)
        }else {
            bottomsheetRef.current?.close()
        }
    },[isOpen, content])

  return (
    <BottomSheet 
        ref={bottomsheetRef}
        backdropComponent={renderBackdrop} 
        enablePanDownToClose={config.enablePanDownToClose ?? true}
        index={-1}
        animateOnMount
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backgroundStyle={{
            backgroundColor: colors.background,
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
        }}>
        <BottomSheetScrollView>
            {content}
        </BottomSheetScrollView>
    </BottomSheet>
  )
}
