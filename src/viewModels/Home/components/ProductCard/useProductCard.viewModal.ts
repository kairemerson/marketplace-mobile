import { ProductInterface } from "../../../../shared/api/interfaces/product"

interface UseProductCardViewModal {
    product: ProductInterface
}

export const useProductCardViewModal = ({product}: UseProductCardViewModal) => {


    return {product}
}