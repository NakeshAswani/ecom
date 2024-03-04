import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from "../../common/admin/Sidebar"
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { ecomContext } from "../../context/MainContext"

export default function Orders() {
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
                                Orders
                            </h2>
                            <div className='p-3'>
                                <Table striped bordered style={{ textAlign: "center", verticalAlign: "middle" }} className='mb-4'>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>User Name</th>
                                            <th>User Address</th>
                                            <th>Product Category</th>
                                            <th>Product Name</th>
                                            <th>Product Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>User1</td>
                                            <td>Address1</td>
                                            <td>Category1</td>
                                            <td>Product1</td>
                                            <td>Price1</td>
                                            <td>Quantity1</td>
                                            <td>Total1</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>User2</td>
                                            <td>Address2</td>
                                            <td>Category2</td>
                                            <td>Product2</td>
                                            <td>Price2</td>
                                            <td>Quantity2</td>
                                            <td>Total2</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>User3</td>
                                            <td>Address3</td>
                                            <td>Category3</td>
                                            <td>Product3</td>
                                            <td>Price3</td>
                                            <td>Quantity3</td>
                                            <td>Total3</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>User4</td>
                                            <td>Address4</td>
                                            <td>Category4</td>
                                            <td>Product4</td>
                                            <td>Price4</td>
                                            <td>Quantity4</td>
                                            <td>Total4</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>User5</td>
                                            <td>Address5</td>
                                            <td>Category5</td>
                                            <td>Product5</td>
                                            <td>Price5</td>
                                            <td>Quantity5</td>
                                            <td>Total5</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>User6</td>
                                            <td>Address6</td>
                                            <td>Category6</td>
                                            <td>Product6</td>
                                            <td>Price6</td>
                                            <td>Quantity6</td>
                                            <td>Total6</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>User7</td>
                                            <td>Address7</td>
                                            <td>Category7</td>
                                            <td>Product7</td>
                                            <td>Price7</td>
                                            <td>Quantity7</td>
                                            <td>Total7</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>User8</td>
                                            <td>Address8</td>
                                            <td>Category8</td>
                                            <td>Product8</td>
                                            <td>Price8</td>
                                            <td>Quantity8</td>
                                            <td>Total8</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>User9</td>
                                            <td>Address9</td>
                                            <td>Category9</td>
                                            <td>Product9</td>
                                            <td>Price9</td>
                                            <td>Quantity9</td>
                                            <td>Total9</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>User10</td>
                                            <td>Address10</td>
                                            <td>Category10</td>
                                            <td>Product10</td>
                                            <td>Price10</td>
                                            <td>Quantity10</td>
                                            <td>Total10</td>
                                            <td><Button className='btn-danger'>Delete</Button></td>
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