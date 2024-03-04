import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { ecomContext } from "../../context/MainContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBell, faGear, faLaptop, faUser } from '@fortawesome/free-solid-svg-icons'
import logo from "../../images/istockphoto-1266252971-612x612.jpg"
import user from "../../images/avatar.png"

export default function Header() {
    let { sideBar, setSideBar } = useContext(ecomContext)
    return (
        <header className='text-white'>
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
                        <div className='d-flex justify-content-between align-items-center'>
                            <FontAwesomeIcon icon={faBars} className='fs-4 hamburger' onClick={() => setSideBar(!sideBar)} />
                            <div className='d-flex align-items-center gap-3'>
                                <FontAwesomeIcon icon={faBell} style={{ width: "30px", height: "30px" }} />
                                <figure className='m-0 position-relative user'>
                                    <img src={user} alt="" className='w-100 h-100' />
                                    <div className='position-absolute top-100 userPop' style={{ width: "250px" }}>
                                        <Card className='rounded-3 border-0'>
                                            <Card.Img variant="top" src={user} className='d-block mx-auto my-2' style={{ width: "200px", height: "200px" }} />
                                            <article className='text-center border-bottom'>
                                                Username
                                            </article>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item>
                                                    <Link to={"/admin/profile"} className='text-decoration-none'>
                                                        <FontAwesomeIcon icon={faUser} className='me-2' />
                                                        Profile
                                                    </Link>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Link to={"/admin/settings"} className='text-decoration-none'>
                                                        <FontAwesomeIcon icon={faGear} className='me-2' />
                                                        Settings
                                                    </Link>
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    <Link to={"/admin/logout"} className='text-decoration-none'>
                                                        <FontAwesomeIcon icon={faLaptop} className='me-2' />
                                                        Logout
                                                    </Link>
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}