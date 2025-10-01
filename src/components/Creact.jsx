import React from 'react'
import '../css/Login.css'
import { Link } from 'react-router-dom'

export default function Creact() {
    return (
        < div className='container '>

            <form action="">
               <p>Sign Up</p>
                <br />
                <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Usernmae" required />
                                <label for="floatingInput">Usernmae</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="email" required />
                                <label for="floatingInput">E-mail</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingInput" placeholder="Password" required />
                                <label for="floatingInput">Password</label>
                            </div> 
                <button id='btn' style={{width:"50%"}}>Create Account</button><br /><br />


            </form>

        </div>
    )
}