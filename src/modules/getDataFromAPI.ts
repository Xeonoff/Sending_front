import { defaultProduct } from "../assets/MockObjects"

 export interface Product {
    id: number,
    full_name : string,
    img : string,
    status : '1' | '0',
    bdate : string,
    sex : 'm' | 'f',
    email : string,
    available_mem : string,
    phone : string,
    last_modified : string
}

 interface t {
    SendingId: number
    Receivers: Product[]
}


export const getProductList = async (title: string): Promise<t> => {
    // return fetch(`http://127.0.0.1:8080/products/?status=A&type=${type}&price_min=${priceMin}&price_max=${priceMax}&title=${title}`)
    //     .then((response) => response.json())
    //     .catch(() => [])
    console.log("here")
    try {
        const response = await fetch(`http://127.0.0.1:8000/receivers/?status=1&full_name=${title}`)
        console.log(response)
        return response.json()
    } catch (error) {
        let result = []
        for (let i = 1; i <= 3; ++i) {
            result.push(defaultProduct(i))
        }
        result = result.filter((product) => {
            return (title == '' || product.full_name.toLowerCase().includes(title.toLowerCase()))
        })
        return {"SendingId":0, "Receivers": result}
    }
    
}


export const getProduct = async (id: string): Promise<Product> => {
    // return fetch(`http://127.0.0.1:8080/products/${id}/`)
    //     .then((response) => response.json())
    //     .catch(() => undefined)
    try {
        const response = await fetch(`http://127.0.0.1:8000/receivers/${id}/`)
        const result = await response.json()
        return result
    } catch (error) {
        return defaultProduct(1)
    }
    
}
