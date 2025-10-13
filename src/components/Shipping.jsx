import '../css/Shipping.css'
import {Link} from 'react-router-dom'


export default function Shipping(){
    return(
        <>
         < br /> < br /> < br /> < br />  < br /><br /><br /><br />
              <form action="">
        <div className="container" id="shipping-bg">
            <p>Shipment Address</p>
            <div className="row">
               
                <div className="col-md-6">
                     
                                <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="firstname" required />
                                <label for="floatingInput">First name</label>
                            </div>
                              <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="lastname" required/>
                                <label for="floatingInput">Last name</label>
                            </div>
                             
                </div>
                 <div className="col-md-6">
                     <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="email" required/>
                                <label for="floatingInput">E-mail</label>
                            </div>
                             <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput" placeholder="number" required/>
                                <label for="floatingInput">Phone number</label>
                            </div>
                           
                </div>
   {/* another row */}
                <div className="row">
                    <div className="col-md-4">
                         <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="number" required/>
                                <label for="floatingInput">City</label>
                            </div>
                    </div>
                    <div className="col-md-4">
                         <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="number" required/>
                                <label for="floatingInput">State</label>
                            </div>
                    </div>
                    <div className="col-md-4">
                         <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput" placeholder="number" required/>
                                <label for="floatingInput">Zip code</label>
                            </div>
                    </div>
                </div>

                {/* last row */}
               
               <div className="form-floating mb-3" >
                                <input type="textarea" style={{padding:"100px"}} className="form-control" id="floatingInput" placeholder="description" />
                                <label for="floatingInput">Desciprion</label>
                            </div>

                            <Link to="/Payment"> <button type="submit" id='btn' style={{ width: "90%" }}>Continue payment</button><br /><br /></Link> 
            </div>
        </div>
         </form>
        </>
    )
}


