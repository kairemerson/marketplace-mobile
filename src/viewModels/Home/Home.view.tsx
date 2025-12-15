import { FlatList, RefreshControl, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { HomeHeader } from "./components/Header"
import { SearchInput } from "./components/SearchInput"
import { ProductInterface } from "../../shared/api/interfaces/product"
import { ProductCard } from "./components/ProductCard"
import { FC } from "react"
import { useHomeViewModel } from "./useHome.ViewModel"
import { Footer } from "./components/Footer"
import { colors } from "../../styles/colors"

export const HomeView: FC<ReturnType<typeof useHomeViewModel>> = ({
    products, 
    handleEnReached, 
    handleRefresh,
    hasNextPage, 
    isLoading, 
    isRefetching,
    isFetchingNextPage}) => {

    return (
        <SafeAreaView edges={["top"]} className="flex-1">
            <FlatList
                data={products}
                renderItem={({item}) => <ProductCard product={item}/>}
                keyExtractor={({id})=> `product-list-item-${id}`}
                numColumns={2}
                onEndReached={handleEnReached}
                columnWrapperStyle={{justifyContent: "space-between"}}
                ListFooterComponent={<Footer isLoading={hasNextPage && Boolean(isLoading || isFetchingNextPage)}/>}
                ListHeaderComponent={() => (
                    <>
                        <HomeHeader/>
                        <SearchInput/>
                    </>
                )}
                contentContainerClassName="px-[16px] pb-[120px]"
                refreshControl={
                    <RefreshControl 
                        refreshing={isRefetching}
                        colors={[colors["purple-base"]]} 
                        tintColor={colors["purple-base"]}
                        onRefresh={handleRefresh}
                    />

                }
            />

        </SafeAreaView>
)
}