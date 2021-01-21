import React from 'react'
import './userpage.css'
import {IoIosArrowBack} from 'react-icons/io'


export default function Order(){
    return(
        <div className='order-container'>
            <form>
                <div className='form-group'>
                    <label>First Name</label>
                    <input type='text' placeholder='Firstname' />
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input type='text' placeholder='Firstname' />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' placeholder='email' />
                </div>
                <div className='form-group'>
                    <label>Phone Number</label>
                    <input type='phone number' placeholder='phone number' />
                </div>
                <div className='order-btn'>
                    <button className='bck-btn'><IoIosArrowBack/></button>
                    <button className='save'>Save</button>

                </div>
                
            </form>
        </div>
    )
}