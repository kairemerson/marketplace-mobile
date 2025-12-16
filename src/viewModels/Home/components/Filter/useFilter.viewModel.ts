import { useState } from "react"
import { useDebounce } from "../../../../shared/hooks/useDebounce"
import { useGetProductsCategoriesQuery } from "../../../../shared/queries/product/use-get-product-categories-query"
import { useBottomSheetStore } from "../../../../shared/store/bottomsheet-store"
import { useFilterStore } from "../../../../shared/store/use-filter-store"

export const useFilterViewModel = () => {

    const {data: productsCategory, isLoading} = useGetProductsCategoriesQuery()
    

    const {updateFilter, filterState, applyFilters, resetFilter} = useFilterStore()
    const {close} = useBottomSheetStore()

    const handleValueMaxChange = (value: number) => {
        updateFilter({key: "valueMax", value})
    }

    const handleValueMinChange = (value: number) => {
        updateFilter({key: "valueMin", value})
    }

    const handleCategoryToggle = (categoryId: number) => {
        const categoryAlreadyInArray = filterState.selectedCategories.includes(categoryId)

        if(categoryAlreadyInArray) {
            updateFilter({key: "selectedCategories", value: filterState.selectedCategories.filter((id)=> id !== categoryId)})
        } else {
            updateFilter({key: "selectedCategories", value: [...filterState.selectedCategories, categoryId]})
        }
    }

    const handleApplyFilters = () => {
        applyFilters()
        close()
    }

    const handleResetFilter = () => {
        close()
        resetFilter()
    }

    return {
        productsCategory, 
        isLoading,
        handleValueMaxChange,
        handleValueMinChange,
        handleCategoryToggle,
        selectedCategories: filterState.selectedCategories,
        handleApplyFilters,
        handleResetFilter
    }
}