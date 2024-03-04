import React from 'react'
import logo from "../../images/istockphoto-1266252971-612x612.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function AdminPanel() {
    return (
        <div className='adminHome position-relative'>
            <form className='w-25 bg-white shadow rounded-4 p-4 position-absolute top-50 start-50 translate-middle'>
                <img src={logo} alt='' className='w-50 d-block mx-auto' />
                <h2 className='text-center fw-bold mb-4'>
                    Login <span>Form</span>
                    <FontAwesomeIcon icon={faUser} className='ms-3' />
                </h2>
                <div className='w-100 mb-4'>
                    <label className='mb-1 fw-medium'>Username:</label>
                    <input type="text" className='w-100' />
                </div>
                <div className='w-100 mb-4'>
                    <label className='mb-1 fw-medium'>Password:</label>
                    <input type="Password" className='w-100' />
                </div>
                <div className='w-100 mb-4'>
                    <Link to={"/admin/dashboard"} className='text-decoration-none'>
                        <button className='w-75 text-capitalize d-block mx-auto py-2 border-0 rounded-3 fw-semibold'>sign in</button>
                    </Link>
                </div>
                <div className='w-100 d-flex justify-content-between align-items-center'>
                    <span className='fw-medium'>
                        <input type="checkbox" className='me-1' />
                        Stay Signed in
                    </span>
                    <Link className='fw-medium text-decoration-none'>Forgot Password ?</Link>
                </div>
            </form>
        </div>
    )
}