import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/web/Header'
import { Button, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { ecomContext } from "../../context/MainContext"

export default function ProductDetails() {
    let [product, setProduct] = useState({})
    let [gallImgs, setGallImgs] = useState([])
    let [imgpath, setImgPath] = useState('')
    let { id } = useParams()
    let getProducts = () => {
        let apiUrl = `https://dummyjson.com/products/${id}`;
        axios.get(apiUrl)
            .then((res) => res.data)
            .then((finalRes) => {
                setProduct(finalRes);
                setGallImgs(finalRes.images)
                setImgPath(finalRes.images[0])
            })
    }
    useEffect(() => {
        getProducts();
    }, [])
    let { cart, setCart } = useContext(ecomContext)
    let cartItemAdd = () => {
        let cartData = cart.filter((item, i) => item.name == product.title)
        if (cartData.length == 1) {
            let finalFilterData = cart.filter((item, i) => {
                if (item.name == product.title) {
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
                name: product.title,
                image: product.thumbnail,
                price: product.price,
                quantity: 1
            }
            setCart([...cart, newItem])
        }
    }
    return (
        <div>
            <Header />
            <Container fluid className='py-5'>
                <Link to={"/products"} className='text-black text-decoration-none'>
                    <button className='btn btn-outline-dark mb-5 fw-bolder'>
                        <FontAwesomeIcon icon={faAngleLeft} className='me-2' title='Go Back To All Products' />
                        Go Back
                    </button>
                </Link>
                <Row>
                    <Col lg={6}>
                        <div className=''>
                            {
                                product != {}
                                    ?
                                    <>
                                        <img src={imgpath} alt="" className='mb-3 w-100' height={"350px"} />
                                        <div className="d-flex gap-3">
                                            {
                                                gallImgs.length >= 1
                                                    ?
                                                    gallImgs.map((ele, i) => {
                                                        return (
                                                            <img src={ele} alt="" width={"80px"} height={"80px"} onClick={(event) => setImgPath(event.target.src)} />
                                                        )
                                                    })
                                                    :
                                                    ""
                                            }
                                        </div>
                                    </>
                                    :
                                    ""
                            }

                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className=''>
                            {
                                product != {}
                                    ?
                                    <>
                                        <h1 className='mb-4'>Name: {product.title}</h1>
                                        <h4 className='mb-4'>Description: {product.description}</h4>
                                        <h4 className='mb-4'>Price: {product.price} Rs.</h4>
                                        <h6 className='mb-4'>
                                            <span className='text-decoration-line-through'>
                                                MRP: {((product.price) / (1 - (product.discountPercentage / 100))).toFixed(2)} Rs.
                                            </span>
                                            <span className='text-danger fs-4 fw-bold text-decoration-none'>
                                                {product.discountPercentage}%
                                            </span>
                                        </h6>
                                        <h4 className='mb-4'>Rating: {product.rating}<sup className='fs-6 text-warning'><FontAwesomeIcon icon={faStar} /></sup></h4>
                                        <h4 className='text-success mb-4'>{product.stock} in Stock</h4>
                                        <Button variant="dark" onClick={cartItemAdd}>Add to Cart</Button>
                                    </>
                                    :
                                    ""
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}