import React from 'react'
import '../css/Login.css'
import { Link } from 'react-router-dom'

export default function Creact() {
    return (
        < div className=' bg-light bg-gradient background'>

            <form action="">
                <h3>Sign up</h3>
                <br />
                <div className="input">
                    <input type="text" name="" id="" className='form-floating' placeholder='Username' required /> <br /><br />
                    <input type="email" name="" id="" placeholder='E-mail' required /> <br /><br />
                    <input type="password" name="" id="" placeholder='Password' required /> <br /><br />
                    <input type="password" name="" id="" placeholder='Cofirm Password' required /> <br /><br />
                </div>
                <button id='btn'>Create</button><br /><br />


            </form>

        </div>
    )
}