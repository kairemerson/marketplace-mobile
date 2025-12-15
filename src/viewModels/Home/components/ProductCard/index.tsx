import { View } from "react-native"
import { ProductInterface } from "../../../../shared/api/interfaces/product"
import { ProductCardView } from "./ProductCard.view"
import { useProductCardViewModal } from "./useProductCard.viewModal"

interface ProductCardParams {
    product: ProductInterface
}

export const ProductCard = (props: ProductCardParams) => {
    const viewModal = useProductCardViewModal(props)
    return (
        <ProductCardView {...viewModal}/>
    )
}