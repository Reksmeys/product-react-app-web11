const BASE_URL = 'https://api.escuelajs.co/api/v1/'
/// MARK: insert product to api
export const createProduct = async (product) => {
    const resp = await fetch(`${BASE_URL}products/`, 
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    })
    return resp.json()
}

//GET CATEGORIES
export const getCategories = async () => {
    const resp = await fetch(`${BASE_URL}categories`)
    return resp.json()
}

