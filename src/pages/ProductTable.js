import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { fetchProducts } from '../actions/productAction';

export default function ProductTable() {
    const [product, setProduct] = useState([{}])
    useEffect(() => {
        fetchProducts()
        .then(resp => setProduct(resp))
    }, [])
    const columns = [
        {
            name: 'Product Title',
            selector: r => r.title,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Photo',
            selector: row => <img src={row.images[0]} alt="products" width={80} />,
        },
    ];
    // const data = [
    //     {
    //         id: 1,
    //         t: 'Beetlejuice',
    //         year: '1988',
    //         price: 90
    //     },
    //     {
    //         id: 2,
    //         t: 'Ghostbusters',
    //         year: '1984',
    //         price: 800
    //     },
    //     {
    //         id: 3,
    //         t: 'Magic Mouse',
    //         year: '2000',
    //         price: 899
    //     },
    // ]
  return (
    <main className='container'>
        <DataTable 
            columns={columns}
            data={product}
            pagination
        />
    </main>
  )
}

