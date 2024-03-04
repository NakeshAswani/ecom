import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from "../../common/admin/Sidebar"
import { Col, Container, Row } from 'react-bootstrap'
import { ecomContext } from "../../context/MainContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function AddProduct() {
    let { sideBar } = useContext(ecomContext)
    return (
        <div>
            <Header />
            <Container fluid className='p-0'>
                <Row className='g-0 bg-secondary-subtle'>
                    <Col lg={2} className='aside text-white' style={(sideBar) ? { transformOrigin: "left", transform: "scaleX(1)", width: "", transition: "0.5s", opacity: "1", fontSize: "initial" } : { transformOrigin: "left", transform: "scaleX(0)", width: "0px", transition: "0.5s", opacity: "0", fontSize: "0px" }}>
                        <Sidebar />
                    </Col>
                    <Col lg={10} style={{ marginLeft: "auto", marginRight: "auto" }}>
                        <div className='h-100'>
                            <h2 className='bg-white py-2 px-3 shadow fw-bolder rounded-bottom-4'>
                                <span className='me-2'>Product</span>
                                <FontAwesomeIcon icon={faArrowRightLong} className='me-2' />
                                Add Product
                            </h2>
                            <div className='p-3'>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Product Category Name:</label><br />
                                    <select type="text" className='w-50 border border-1 border-dark-subtle p-1 rounded-3' style={{ height: "40px" }}>
                                        <option>Men</option>
                                        <option>Women</option>
                                        <option>Kids</option>
                                    </select>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Product Name:</label><br />
                                    <input className='w-50 border border-1 border-dark-subtle p-1 rounded-3' style={{ height: "40px" }} />
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Product Description:</label><br />
                                    <textarea className='w-50 border border-1 border-dark-subtle p-1 rounded-3' style={{ height: "100px", resize: "none" }}></textarea>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Product Price:</label><br />
                                    <input className='w-50 border border-1 border-dark-subtle p-1 rounded-3' style={{ height: "40px" }} />
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Product Quantity:</label><br />
                                    <input className='w-50 border border-1 border-dark-subtle p-1 rounded-3' style={{ height: "40px" }} />
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Product Image:</label><br />
                                    <input type="file" className='w-50 border border-1 border-dark-subtle p-1 bg-white rounded-3' />
                                </div>
                                <div>
                                    <button className='btn btn-dark px-4 fw-semibold'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}