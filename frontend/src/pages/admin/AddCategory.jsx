import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from "../../common/admin/Sidebar"
import { Col, Container, Row } from 'react-bootstrap'
import { ecomContext } from "../../context/MainContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function AddCategory() {
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
                                <span className='me-2'>Category</span>
                                <FontAwesomeIcon icon={faArrowRightLong} className='me-2' />
                                Add Category
                            </h2>
                            <div className='p-3'>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Category Name:</label><br />
                                    <input type="text" className='w-50 border border-1 border-dark-subtle p-1 rounded-3' style={{ height: "40px" }} />
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Category Description:</label><br />
                                    <textarea className='w-50 border border-1 border-dark-subtle p-1 rounded-3' style={{ height: "100px", resize: "none" }}></textarea>
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Category Image:</label><br />
                                    <input type="file" className='w-50 border border-1 border-dark-subtle p-1 bg-white rounded-3' />
                                </div>
                                <div className='mb-4'>
                                    <label className='mb-2 fw-medium'>Category Status:</label><br />
                                    <input type="radio" name="status" value="Active" /> Active <br />
                                    <input type="radio" name="status" value="De-Active" /> De-Active
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