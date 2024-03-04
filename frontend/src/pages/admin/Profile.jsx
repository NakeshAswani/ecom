import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from "../../common/admin/Sidebar"
import { Col, Container, Row } from 'react-bootstrap'
import { ecomContext } from "../../context/MainContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faHome } from '@fortawesome/free-solid-svg-icons'
import user from "../../images/avatar.png"

export default function Profile() {
  let { sideBar } = useContext(ecomContext)
  return (
    <div>
      <Header />
      <Container fluid className='p-0'>
        <Row className='g-0 bg-secondary-subtle' style={{ height: "100vh" }}>
          <Col lg={2} className='aside text-white' style={(sideBar) ? { transformOrigin: "left", transform: "scaleX(1)", width: "", transition: "0.5s", opacity: "1", fontSize: "initial" } : { transformOrigin: "left", transform: "scaleX(0)", width: "0px", transition: "0.5s", opacity: "0", fontSize: "0px" }}>
            <Sidebar />
          </Col>
          <Col lg={10} style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div className='h-100'>
              <h3 className='bg-white py-2 px-3 shadow fw-bolder rounded-bottom-4'>
                <FontAwesomeIcon icon={faHome} className='fs-4 me-2' />
                <FontAwesomeIcon icon={faArrowRightLong} className='me-2' />
                Profile
              </h3>
              <div className='p-3'>
                <Row>
                  <Col lg={4}>
                    <div className='bg-white h-100 p-4 rounded-4'>
                      <img src={user} alt="" className='w-75 d-block mx-auto' />
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className='bg-white h-100 p-4 rounded-4'>
                      <div className='mb-3'>
                        <label>Username:</label><br />
                        <input type="text" value={"Username"} disabled className='w-100 border-0 border-2 border-dark border-bottom bg-white rounded-2 p-1 text-dark' />
                      </div>
                      <div className='mb-3'>
                        <label>Full Name:</label><br />
                        <input type="text" value={"Name"} disabled className='w-100 border-0 border-2 border-dark border-bottom bg-white rounded-2 p-1 text-dark' />
                      </div>
                      <div className='mb-3'>
                        <label>Password:</label><br />
                        <input type="password" value={"Password"} disabled className='w-100 border-0 border-2 border-dark border-bottom bg-white rounded-2 p-1 text-dark' />
                      </div>
                      <div className='mb-3'>
                        <label>Email:</label><br />
                        <input type="text" value={"admin@gmail.com"} disabled className='w-100 border-0 border-2 border-dark border-bottom bg-white rounded-2 p-1 text-dark' />
                      </div>
                      <div className='mb-3'>
                        <label>Phone:</label><br />
                        <input type="text" value={"5686324958"} disabled className='w-100 border-0 border-2 border-dark border-bottom bg-white rounded-2 p-1 text-dark' />
                      </div>
                      <div className='mb-3'>
                        <label>Profession:</label><br />
                        <input type="text" value={"Profession"} disabled className='w-100 border-0 border-2 border-dark border-bottom bg-white rounded-2 p-1 text-dark' />
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
