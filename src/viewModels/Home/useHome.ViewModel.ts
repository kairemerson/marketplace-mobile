import { useState } from "react"
import { useDebounce } from "../../shared/hooks/useDebounce"
import { useProductInfiniteQuery } from "../../shared/queries/product/use-product-infinite-query"
import { useFilterStore } from "../../shared/store/use-filter-store"

export const useHomeViewModel = () => {

    const {appliedFilterState} = useFilterStore()
    const [searchInputText, setSearchInputText] = useState("")
    
    const currentSearchText = useDebounce(searchInputText) 

    const {
        products,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        isRefetching,
        refetch
    } = useProductInfiniteQuery({filters: {...appliedFilterState, searchText: currentSearchText}})

    const handleLoadMore = () => {
        if(hasNextPage && !isFetchingNextPage && !isLoading) {
            fetchNextPage()
        }
    }

    const handleRefresh = async () => {
        await refetch()
    }

    const handleEnReached = () => {
        handleLoadMore()
    }

    return {
        handleLoadMore,
        handleRefresh,
        products,
        handleEnReached,
        isLoading,
        hasNextPage,
        isRefetching,
        isFetchingNextPage,
        setSearchInputText,
        searchInputText
    }
}