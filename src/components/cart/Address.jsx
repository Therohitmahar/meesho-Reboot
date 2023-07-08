import React from 'react'
import { FiPhone, FiMapPin } from "react-icons/fi"
import "./address.css"
import { useNavigate } from 'react-router-dom'

export default function Address() {
    const navigate = useNavigate();
    return (
        <div className='address-css'>
            <form onSubmit={navigate('payment')}>

                <h2><FiPhone /> Contact Details</h2>
                <input type='text' required placeholder='Name' />
                <input type='text' required placeholder='Phone Numberd' />

                <h2><FiMapPin /> Address</h2>
                <input required placeholder='House no./ Building Name' />
                <input required placeholder='Road Name / Area / Colony' />
                <input required placeholder='Pincode' />
                <div className='city-state' style={{ display: 'flex', width: "100%", }}>
                    <input required placeholder='City' style={{ width: "90%", marginRight: "15px" }} />
                    <input required placeholder='State' style={{ width: "90%" }} />
                </div>
                <input required placeholder='Nearby Location (optional)' />
                <button type='submit' onClick={(e) => {
                    e.preventDefault();
                    navigate('payment')
                }}>Save Address and continue</button>
            </form>
        </div>
    )
}
