import React from 'react'
import '../css/Login.css'
import { Link } from 'react-router-dom'

export default function login() {
    return (
        < div className=' bg-light bg-gradient background'>

            <form action="">
                <h3>Sign in</h3>
                <br />
                <div className="input">
                    <input type="text" name="" id="" className='form-floating' placeholder='Username' required /> <br /><br />
                    <input type="password" name="" id="" placeholder='Password' required /> <br /><br />
                </div>
                <button id='btn'>Login</button><br /><br />
                <h6>OR</h6>
                <Link to="/creact">Create account</Link>
                <a href="#">Forgot password?</a>

            </form>

        </div>
    )
}