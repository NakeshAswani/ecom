import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from "../../common/admin/Sidebar"
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { ecomContext } from "../../context/MainContext"

export default function Users() {
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
                                Users
                            </h2>
                            <div className='p-3'>
                                <Table striped bordered style={{ textAlign: "center", verticalAlign: "middle" }} className='mb-4'>
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Password</th>
                                            <th colSpan={2}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>abc</td>
                                            <td>abc@gmail.com</td>
                                            <td>1234567890</td>
                                            <td>123</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>abcd</td>
                                            <td>abcd@gmail.com</td>
                                            <td>1548976358</td>
                                            <td>1234</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>abcde</td>
                                            <td>abcde@gmail.com</td>
                                            <td>3589647585</td>
                                            <td>12345</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>abcdef</td>
                                            <td>abcdef@gmail.com</td>
                                            <td>9578632458</td>
                                            <td>123456</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>abcdefg</td>
                                            <td>abcdefg@gmail.com</td>
                                            <td>9654863249</td>
                                            <td>1234567</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>abcdefgh</td>
                                            <td>abcdefgh@gmail.com</td>
                                            <td>5863247864</td>
                                            <td>12345678</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>abcdefghi</td>
                                            <td>abcdefghi@gmail.com</td>
                                            <td>6786324869</td>
                                            <td>123456789</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>abcdefghij</td>
                                            <td>abcdefghij@gmail.com</td>
                                            <td>95686632147</td>
                                            <td>1234567890</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                            <td><Button className='btn-success'>Edit</Button></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}