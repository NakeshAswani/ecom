import React, { useContext, useEffect, useState } from 'react'
import Header from '../../common/web/Header'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import { ecomContext } from "../../context/MainContext"
import { Link } from 'react-router-dom'

export default function Home() {
    let [categories, setCategories] = useState([])
    let [brands, setBrands] = useState([])
    let shopCat = categories.map((ele, i) => {
        return (
            <ShopCategory item={ele} key={i} />
        )
    })
    let shopBrand = brands.map((ele, i) => {
        return (
            <ShopBrand item={ele} key={i} />
        )
    })
    let getCategory = () => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => res.data)
            .then((finalRes) => {
                setCategories(finalRes);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    let brandProd = () => {
        axios.get('https://dummyjson.com/products')
            .then((res) => res.data)
            .then((finalRes) => {
                let prods = finalRes.products;
                let uniqueBrands = []
                setBrands(prods.filter((ele, i) => {
                    if (!uniqueBrands.includes(ele.brand)) {
                        uniqueBrands.push(ele.brand)
                        return true
                    }
                    return false
                }))
            })
    }
    useEffect(() => {
        getCategory()
        brandProd()
    }, [])
    return (
        <div>
            <Header />
            <Container fluid className='py-5'>
                <Container>
                    <h2 className='fw-bold mb-3'>Shop By Category</h2>
                    <Row className='g-3 mb-5'>
                        {
                            categories.length >= 1
                                ?
                                shopCat
                                :
                                "no data found"
                        }
                    </Row>
                    <h2 className='fw-bold mb-3'>Branded Products</h2>
                    <Row className='g-4'>
                        {
                            brands.length >= 1
                                ?
                                shopBrand
                                :
                                "no data found"
                        }
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

let ShopCategory = ({ item }) => {
    let { setCatSearch } = useContext(ecomContext)
    let setCategory = (ele) => {
        setCatSearch(ele)
    }
    return (
        <Col lg={2}>
            <div className='p-2 text-center rounded-3' onClick={() => setCategory(item)}>
                <Link to={`/products/${item}`} className='text-decoration-none w-100'>
                    <button className='btn btn-outline-dark w-100 p-1 text-capitalize'>
                        {item}
                    </button>
                </Link>
            </div>
        </Col>
    )
}
let ShopBrand = ({ item }) => {
    return (
        <Col lg={3}>
            <Link to={`/product/${item.id}`}>
                <div className='position-relative'>
                    <img src={item.thumbnail} alt="" width={"100%"} height={"200px"} />
                    <article className='w-100 text-center py-1 bg-danger text-white position-absolute bottom-0 start-50 translate-middle-x'>{item.brand}</article>
                </div>
            </Link>
        </Col>
    )
}