import { ProductRequest } from "../api/interfaces/http/product"
import { ProductResponse } from "../api/interfaces/http/product-response"
import { marketPlaceApiClient } from "../api/market-place"



export const getProducts = async (params: ProductRequest) => {
    const {data} = await marketPlaceApiClient.post<ProductResponse>("/products", params)

    return data
}