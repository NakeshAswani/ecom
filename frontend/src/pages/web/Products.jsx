import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/web/Header'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { ecomContext } from "../../context/MainContext"
import { Link } from 'react-router-dom';

export default function Products() {
    let { search } = useContext(ecomContext)
    let [product, setProducts] = useState([])
    let [categories, setCategories] = useState([])
    let getProducts = () => {
        let apiUrl;
        if (search) {
            apiUrl = `https://dummyjson.com/products/search?q=${search}`
        }
        else {
            apiUrl = 'https://dummyjson.com/products'
        }
        axios.get(apiUrl)
            .then((res) => {
                return(res.data)
                
            })
            .then((finalRes) => {
                setProducts(finalRes.products);
            })
    }
    let getCategory = () => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => res.data)
            .then((finalRes) => {
                setCategories(finalRes);
            })
    }
    let shopCat = categories.map((ele, i) => {
        return (
            <ShopCategory item={ele} key={i} />
        )
    })
    let allProducts = product.map((ele, i) => {
        return (
            <ProductItems pData={ele} key={i} />
        )
    })
    useEffect(() => {
        getProducts();
        getCategory();
    },[])
    return (
        <div>
            <Header />
            <Container fluid className='py-5'>
                <Container>
                    <div className='mb-5'>
                        <h1 className='fw-bold mb-3 text-center'>Products</h1>
                        <Row className='g-4'>
                            {
                                product.length >= 1
                                    ?
                                    allProducts
                                    :
                                    "no data found"
                            }
                        </Row>
                    </div>
                    <div>
                        <h2 className='fw-bold mb-3'>Shop By Category</h2>
                        <Row className='g-4 mb-5'>
                            {
                                categories.length >= 1
                                    ?
                                    shopCat
                                    :
                                    "no data found"
                            }
                        </Row>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

let ProductItems = ({ pData }) => {
    let { cart, setCart } = useContext(ecomContext)
    let cartItemAdd = () => {
        let cartData = cart.filter((item, i) => item.name == pData.title)
        if (cartData.length == 1) {
            let finalFilterData = cart.filter((item, i) => {
                if (item.name == pData.title) {
                    if (item.quantity >= 10) {
                        alert("Max Product Added")
                    }
                    else {
                        item.quantity += 1
                    }
                    return item
                }
            })
            setCart(finalFilterData)
        }
        else {
            let newItem = {
                name: pData.title,
                image: pData.thumbnail,
                price: pData.price,
                quantity: 1
            }
            setCart([...cart, newItem])
        }
    }
    return (
        <Col lg={3}>
            <Card>
                <Card.Img variant="top" src={pData.thumbnail} height={"200px"} />
                <Card.Body>
                    <Card.Title>{pData.title.slice(0, 20)}...</Card.Title>
                    <Card.Text>
                        {pData.description.slice(0, 25)}...
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Button variant="dark" onClick={cartItemAdd}>Add to Cart</Button>
                        <Link to={`/product/${pData.id}`}><Button variant="dark">Read More</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
let ShopCategory = ({ item }) => {
    let { setCatSearch } = useContext(ecomContext)
    let setCategory = (ele) => {
        setCatSearch(ele)
    }
    return (
        <Col lg={2}>
            <div className='bg-dark-subtle p-2 text-capitalize text-center rounded-3' onClick={() => setCategory(item)}>
                <Link to={`/products/${item}`} className='text-dark text-decoration-none'>
                    {item}
                </Link>
            </div>
        </Col>
    )
}