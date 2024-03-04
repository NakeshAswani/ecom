import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from "../../images/istockphoto-1266252971-612x612.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { ecomContext } from '../../context/MainContext';

export default function Header() {
    let [header, setHeader] = useState(false)
    let headerFix = () => {
        if (window.scrollY >= 100) {
            setHeader(true)
        }
        else {
            setHeader(false)
        }
    }
    useEffect(() => {
        headerFix()
        window.addEventListener('scroll', headerFix);
        return () => {
            window.removeEventListener('scroll', headerFix);
        };
    }, [])
    let { search, setSearch } = useContext(ecomContext)
    let { cart } = useContext(ecomContext)
    let changeValue = (event) => {
        setSearch(event.target.value)
    }
    return (
        <header className='text-white' style={(header) ? { position: "fixed", zIndex: "99" } : { position: "static" }}>
            <Container fluid className='py-2'>
                <Row className='align-items-center'>
                    <Col lg={2}>
                        <Link to={"/"} className='text-decoration-none'>
                            <div className='bg-white text-center text-dark fs-5 p-2 fw-semibold rounded-3'>
                                <img src={logo} alt="" style={{ width: "35%" }} />
                                E-Commerce
                            </div>
                        </Link>
                    </Col>
                    <Col lg={10}>
                        <div className='d-flex justify-content-end align-items-center gap-4 fw-semibold'>
                            <Link to={"/"} className='text-white text-decoration-none'>Home</Link>
                            <Link to={"/about-us"} className='text-white text-decoration-none'>About Us</Link>
                            <Link to={"/products"} className='text-white text-decoration-none'>Product</Link>
                            <div className='d-flex align-items-center gap-3'>
                                <input type="text" className='rounded-2 border border-1 p-1' placeholder='Type to search' value={search} onChange={changeValue} />
                                <Link to={"/products"}>
                                    <button className='btn btn-outline-light py-1'>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='me-2' />
                                        Search
                                    </button>
                                </Link>
                            </div>
                            <Link to={"/user"} className='fs-5 text-white text-decoration-none'>
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                            <Link to={"/cart"} className='fs-4 text-white text-decoration-none position-relative'>
                                <FontAwesomeIcon icon={faCartShopping} />
                                <span className='position-absolute top-0 bg-danger rounded-circle d-flex justify-content-center align-items-center' style={{ fontSize: "12px", width: "15px", height: "15px", right: "-8px" }}>{cart.length}</span>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}