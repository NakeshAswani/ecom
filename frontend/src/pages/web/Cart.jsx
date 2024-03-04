import React, { useContext, useState } from 'react'
import Header from '../../common/web/Header'
import { Container, Table } from 'react-bootstrap'
import { ecomContext } from "../../context/MainContext"

export default function Cart() {
    let { cart } = useContext(ecomContext)
    let total = 0;
    cart.forEach((element) => {
        total += (element.price * element.quantity)
    });
    let allCartItems = cart.map((item, i) => {
        return (
            <CartItems cardDetails={item} index={i} key={i} />
        )
    })
    return (
        <div>
            <Header />
            <Container fluid className='py-5'>
                <Container>
                    <h1 className='fw-bolder text-center text-dark mb-4'>Checkout Cart</h1>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allCartItems}
                            <tr>
                                <td colSpan={5} ><h4>Total</h4></td>
                                <td><h4>{total}</h4></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Container>
        </div>
    )
}

let CartItems = ({ cardDetails, index }) => {
    let { cart, setCart } = useContext(ecomContext)
    let [quantity, setQuantity] = useState(cardDetails.quantity)
    let cartDelete = () => {
        let deleteData = cart.filter((item, i) => i != index);
        setCart(deleteData)
    }
    let qtyChange = (event) => {
        if (event.target.value == 0) {
            setQuantity(event.target.value)
            setTimeout(() => {
                cartDelete()
            }, 500)
        }
        else if (event.target.value > 10) {
            alert("Max Limit Reached")
        }
        else {
            setQuantity(event.target.value)
            let filterQty = cart.filter((item, i) => {
                if (index == i) {
                    item.quantity = event.target.value
                }
                return item
            })
            setCart(filterQty)
        }
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{cardDetails.name}</td>
            <td>
                <img src={cardDetails.image} alt="" width={"50px"} height={"50px"} />
            </td>
            <td><input type='number' value={quantity} onChange={qtyChange} /></td>
            <td>{cardDetails.price}</td>
            <td>{cardDetails.price * (cardDetails.quantity)}</td>
            <td><button className='btn btn-dark' onClick={cartDelete}>delete</button></td>
        </tr>
    )
}