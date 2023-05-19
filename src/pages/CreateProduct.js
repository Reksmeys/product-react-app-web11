import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { createProduct, getCategories, uploadImage } from "../actions/productAction"

export default function ProductForm(){
    const navigate = useNavigate()
    const [source, setSource] = useState("")
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({
        "title": "",
        "price": 0,
        "description": "",
        "categoryId": 0,
        "images": [
            "https://picsum.photos/640/640?r=801"
        ]
    })

    const handleInputChange = (e) => {
        console.log(e)
        const {name, value} = e.target
        setProduct(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const onFileUploadHandler = (e) => {
        console.log(e.target.files[0])
        setSource(e.target.files[0])
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("handle submit")
        // covert image to formData
        const formData = new FormData()
        formData.append("file", source)
        uploadImage(formData)
        .then(response => {
            product.images = [response.data.location]
            console.log(product)
            createProduct(product)
            .then(resp => {
                console.log(resp)
                alert("Insert Product Sucess")
                navigate("/")
            })
        })
       
        // createProduct(product)
        // .then(response => alert("sucess"))
    }
    useEffect(() => {
        getCategories()
        .then(response => setCategories(response))
    }, [])
    return(
        <form 
            className="mt-5 w-50 m-auto"
            onSubmit={handleSubmit}
        >
            <h1 className="text-center">Create a Product</h1>
            <div className="mb-3">
                <label htmlFor="title" class="form-label">Product title</label>
                <input 
                    type="text" 
                    class="form-control"
                    placeholder="Magic Mouse"
                    name="title"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input 
                    type="number" 
                    className="form-control"
                    placeholder="200$"
                    name="price"
                    onChange={handleInputChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="description" class="form-label">Description</label>
                <textarea 
                    class="form-control" 
                    rows="5"
                    name="description"
                    placeholder="Leave the description here"
                    onChange={handleInputChange}
                >

                </textarea>
            </div>

            <select 
                class="form-select"
                onChange={handleInputChange}
                name="categoryId"
            >
                <option selected>Choose Category</option>
                {
                    categories.map(cat => (
                        <option value={cat.id}>{cat.name}</option>
                    ))
                }
            </select>
            <div className="mb-3">
                <label htmlFor="images" className="form-label">Upload Image</label>
                <input 
                    type="file" 
                    className="form-control"
                    name="images"
                    onChange={onFileUploadHandler}
                />
            </div>
            {/* preview image */}
            <div className="mb-3">
                <img className="w-50" 
                    src={source && URL.createObjectURL(source)} alt="" />
            </div>
            <button 
                type="submit" 
                class="btn btn-primary mt-4 w-100"
            >Create Product</button>
        </form>
    )
}