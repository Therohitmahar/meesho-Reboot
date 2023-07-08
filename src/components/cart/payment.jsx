import React from 'react'
import TotalPrice from './TotalPrice'
import { BsShieldFillCheck } from 'react-icons/bs'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import { InfoState } from '../../context/Context'

function COD() {
    return (

        <div style={{ width: "30%" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h3> Payment Method</h3>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>

                    <BsShieldFillCheck /> <span style={{ fontSize: "14px" }}>100% Secure Payment</span>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "20px" }}>
                <span style={{ fontSize: "14px" }}>PAY IN CASH</span>
                <div style={{ height: "1px", width: "50%", backgroundColor: "grey", marginRight: "50px" }}></div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "20px" }}>
                <input style={{ boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1)" }} type='checkbox' checked></input>
                <p style={{ marginRight: "20px" }}>Cash on Delivery</p>
                <IoCheckmarkCircleSharp />
            </div>
        </div>)
}
function Payment() {
    const { state: { cart } } = InfoState();
    return (
        <>
            {cart.length > 0 ? <div style={{ display: "flex", justifyContent: "center", margin: "50px" }}>
                <COD />
                <TotalPrice continueTo={"checkout"} ContinueTitle="Continue" justSaying="true" />
            </div> : <div className="cart-page">
                <h1>

                    Nothing In Cart
                </h1>
            </div>}
        </>

    )
}

export default Payment;