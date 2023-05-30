import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from './../redux/actions/productActions'
import Cards from '../components/Cards'
import LoadingView from '../components/LoadingView'
import secureLocalStorage from 'react-secure-storage'

export default function Home() {

    const dispatch = useDispatch()
    const {isLogin} = useSelector(state => state.authR)
    const {products} = useSelector(state => state.productR)

    // The same as componentDidMount, Render
    useEffect(() => {
        console.log("is login", isLogin)
        console.log(secureLocalStorage.getItem("kiki"))
        dispatch(fetchProducts())  
    }, []);
  return (
    <Container>
        <h1 className='h1 mt-3'>Product Collection</h1>
        <Row className='g-3 mt-3'>
            {
                products.length == 0 ? <LoadingView /> : <Cards products={products} title="Little Kid" />
            }
        </Row>
    </Container>
  )
}
