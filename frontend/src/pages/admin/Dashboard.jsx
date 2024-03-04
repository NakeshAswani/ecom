import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from "../../common/admin/Sidebar"
import { Col, Container, Row } from 'react-bootstrap'
import { ecomContext } from "../../context/MainContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faBookmark, faStar, faUsers } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';

export default function Dashboard() {
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
                Dashboard
              </h3>
              <div className='p-3'>
                <Row className='gx-3'>
                  <Col lg={3}>
                    <div className='bg-white shadow d-flex align-items-center gap-3 rounded-3'>
                      <div className='bg-danger text-white text-center p-3 rounded-start-3' style={{ width: "40%", fontSize: "50px" }}>
                        <FontAwesomeIcon icon={faUsers}  />
                      </div>
                      <div>
                        <h5>Users</h5>
                        <h6><CountUp end={8} delay={0.5} /></h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className='bg-white shadow d-flex align-items-center gap-3 rounded-3'>
                      <div className='bg-primary text-white text-center p-3 rounded-start-3' style={{ width: "40%", fontSize: "50px" }}>
                        <FontAwesomeIcon icon={faBagShopping}  />
                      </div>
                      <div>
                        <h5>Products</h5>
                        <h6><CountUp end={5} delay={0.5} duration={2} /></h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className='bg-white shadow d-flex align-items-center gap-3 rounded-3'>
                      <div className='bg-success text-white text-center p-3 rounded-start-3' style={{ width: "40%", fontSize: "50px" }}>
                        <FontAwesomeIcon icon={faBookmark}  />
                      </div>
                      <div>
                        <h5>Category</h5>
                        <h6><CountUp end={5} delay={0.5} duration={2} /></h6>
                      </div>
                    </div>
                  </Col>
                  <Col lg={3}>
                    <div className='bg-white shadow d-flex align-items-center gap-3 rounded-3'>
                      <div className='bg-black text-white text-center p-3 rounded-start-3' style={{ width: "40%", fontSize: "50px" }}>
                        <FontAwesomeIcon icon={faStar}  />
                      </div>
                      <div>
                        <h5>Stars</h5>
                        <h6><CountUp end={500} delay={0.5} duration={3} /></h6>
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