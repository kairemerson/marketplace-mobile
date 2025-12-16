import { ProductInterface } from "../../../../shared/api/interfaces/product"

interface UseProductCardViewModal {
    product: ProductInterface
}

export const useProductCardViewModal = ({product}: UseProductCardViewModal) => {

    const formatProductName = (name: string) => {
        if(name.length > 17) {
            return `${name.slice(0, 17)}...`
        }

        return name
    }

    const formatRating = product.averageRating.toFixed(1).replace(",", ".")

    const displayName = formatProductName(product.name)

    return {product, displayName, formatRating}
}