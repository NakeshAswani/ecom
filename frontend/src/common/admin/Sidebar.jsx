import React, { useContext, useEffect } from 'react'
import { ecomContext } from '../../context/MainContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faLaptop } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'

export default function Sidebar() {
    let { categorySubMenu, setCategorySubMenu } = useContext(ecomContext)
    let { productSubMenu, setProductSubMenu } = useContext(ecomContext)
    let url = useParams()
    useEffect(() => {
        setCategorySubMenu(false)
        setProductSubMenu(false)
    }, [url])
    return (
        <div className='w-100 h-100'>
            <div className=''>
                <ul className='px-4 py-3 m-0'>
                    <li className='pb-4'>
                        <FontAwesomeIcon icon={faLaptop} className='me-2' />
                        <Link to={"/admin/dashboard"} className='text-white text-decoration-none'>Dashboard</Link>
                    </li>
                    <li className='pb-4' style={{ cursor: "pointer" }} l onClick={() => setCategorySubMenu(!categorySubMenu)}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <FontAwesomeIcon icon={faLaptop} className='me-2' />
                                Category
                            </div>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <ul className='bg-dark mt-2 subMenu' style={(categorySubMenu) ? { transition: "0.3s", display: "block", transform: "scaleY(1)", height: "auto", padding: "0px 16px", opacity: "1", fontSize: "initial" } : { transition: "0.3s", transform: "scaleY(0)", height: "0px", padding: "0px", opacity: "0", fontSize: "0px" }}>
                            <li className='py-2'>
                                <Link to={"/admin/dashboard/category/add-category"} className='text-white text-decoration-none'>Add Category</Link>
                            </li>
                            <li className='py-2'>
                                <Link to={"/admin/dashboard/category/view-category"} className='text-white text-decoration-none'>View Category</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='pb-4' style={{ cursor: "pointer" }} l onClick={() => setProductSubMenu(!productSubMenu)}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div>
                                <FontAwesomeIcon icon={faLaptop} className='me-2' />
                                Product
                            </div>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </div>
                        <ul className='bg-dark mt-2 subMenu' style={(productSubMenu) ? { transition: "0.3s", display: "block", transform: "scaleY(1)", height: "auto", padding: "0px 16px", opacity: "1", fontSize: "initial" } : { transition: "0.3s", transform: "scaleY(0)", height: "0px", padding: "0px", opacity: "0", fontSize: "0px" }}>
                            <li className='py-2'>
                                <Link to={"/admin/dashboard/category/add-product"} className='text-white text-decoration-none'>Add Product</Link>
                            </li>
                            <li className='py-2'>
                                <Link to={"/admin/dashboard/category/view-product"} className='text-white text-decoration-none'>View Product</Link>
                            </li>
                        </ul>
                    </li>
                    <li className='pb-4'>
                        <FontAwesomeIcon icon={faLaptop} className='me-2' />
                        <Link to={"/admin/dashboard/users"} className='text-white text-decoration-none'>Users</Link>
                    </li>
                    <li className='pb-4'>
                        <FontAwesomeIcon icon={faLaptop} className='me-2' />
                        <Link to={"/admin/dashboard/orders"} className='text-white text-decoration-none'>Orders</Link>
                    </li>
                    <li className='pb-4'>
                        <FontAwesomeIcon icon={faLaptop} className='me-2' />
                        <Link to={"/admin/logout"} className='text-white text-decoration-none'>Logout</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}