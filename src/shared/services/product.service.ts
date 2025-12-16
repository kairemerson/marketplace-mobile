import { ProductRequest } from "../api/interfaces/http/product"
import { ProductResponse } from "../api/interfaces/http/product-response"
import { ProductCategory } from "../api/interfaces/product"
import { marketPlaceApiClient } from "../api/market-place"



export const getProducts = async (params: ProductRequest) => {
    const {data} = await marketPlaceApiClient.post<ProductResponse>("/products", params)

    return data
}

export const getProductsCategories = async () => {
    const {data} = await marketPlaceApiClient.get<ProductCategory[]>("/products/categories")
    return data
}