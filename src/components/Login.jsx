import React from 'react'
import '../css/Login.css'
import { Link } from 'react-router-dom'

export default function login() {
    return (
        
        < div className=' container' id="shipping-bg">
< br/> < br/> < br/> < br/>  < br/><br/>
            <form action="">
                <p>Sign in</p>
                <br />
                <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Usernmae" required />
                                <label for="floatingInput">Usernmae</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingInput" placeholder="Password" required />
                                <label for="floatingInput">Password</label>
                            </div>
                <button id='btn' style={{width:"50%"}}>Login</button><br /><br />
                <h6>OR</h6>
                <Link to="/creact">Create account</Link>
                <a href="#">Forgot password?</a>

            </form>

        </div>
    )
}