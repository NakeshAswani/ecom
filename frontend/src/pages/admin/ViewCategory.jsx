import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from "../../common/admin/Sidebar"
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { ecomContext } from "../../context/MainContext"
import logo from "../../images/istockphoto-1266252971-612x612.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

export default function ViewCategory() {
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
                                View Category
                            </h2>
                            <div className='p-3'>
                                <Button className='btn-dark mb-4'>Delete All</Button>
                                <Table striped bordered style={{ textAlign: "center", verticalAlign: "middle" }} className='mb-4'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Id</th>
                                            <th>Category Name</th>
                                            <th>Category Description</th>
                                            <th>Category Image</th>
                                            <th>Category Status</th>
                                            <th colSpan={2}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>1</td>
                                            <td>Kurta</td>
                                            <td>Kurta</td>
                                            <td><img src={logo} alt="" style={{ width: "60px" }} /></td>
                                            <td>Active</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>2</td>
                                            <td>Kurta1</td>
                                            <td>Kurta1</td>
                                            <td><img src={logo} alt="" style={{ width: "60px" }} /></td>
                                            <td>Active</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>3</td>
                                            <td>Kurta2</td>
                                            <td>Kurta2</td>
                                            <td><img src={logo} alt="" style={{ width: "60px" }} /></td>
                                            <td>Active</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>4</td>
                                            <td>Kurta3</td>
                                            <td>Kurta3</td>
                                            <td><img src={logo} alt="" style={{ width: "60px" }} /></td>
                                            <td>Active</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td><input type="checkbox" /></td>
                                            <td>5</td>
                                            <td>Kurta4</td>
                                            <td>Kurta4</td>
                                            <td><img src={logo} alt="" style={{ width: "60px" }} /></td>
                                            <td>Active</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className='d-flex justify-content-center gap-2'>
                                    <Button className='py-1 px-3 btn-dark'>First</Button>
                                    <Button className='py-1 px-3 btn-dark'>Previous</Button>
                                    <Button className='py-1 px-3 btn-dark'>Next</Button>
                                    <Button className='py-1 px-3 btn-dark'>Last</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}