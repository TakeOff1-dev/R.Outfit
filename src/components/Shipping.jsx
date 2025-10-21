import '../css/Shipping.css'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Shipping({ cart, setCard }) {

    // ## Storing input values

    //  step 1 Declare a State Variable
    // step 2, bind th einput values
    // step 3 Create an onChange event Handler

    //step 1
    const [state, setState] = useState({
        fistname: "",
        lastname: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        zipcode: "",
        description: "",
    })

    //step 3
    //     const handleChange=  (event)=>{
    // setState(event.target.value)
    //     }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
        console.log(setState)
    };

    // submit data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/shipment", state);
            console.log("API Response:", response.state);
            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Something went wrong!");
        }

    }


    return (
        <>
            < br /> < br /> < br /> < br />  < br /><br /><br /><br />
            <form action="">
                <div className="container" id="shipping-bg">
                    <p>Shipment Address</p>

                    <div className="row">

                        <div className="col-md-4">

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="firstname"
                                    name="firstname" value={state.name} onChange={handleChange} required />
                                <label for="floatingInput">First name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="lastname" name="lastname" onChange={handleChange} required />
                                <label for="floatingInput">Last name</label>
                            </div>
                            <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="state" name="state" onChange={handleChange} required />
                                    <label for="floatingInput">State</label>
                                </div>
                                 <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput" placeholder="zipcode" name="zipcode" onChange={handleChange} required />
                                    <label for="floatingInput">Zip code</label>
                                </div>

                        </div>
                        <div className="col-md-4">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control" id="floatingInput" placeholder="email" name="email" onChange={handleChange} required />
                                <label for="floatingInput">E-mail</label>

                                 <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="city" name="city" onChange={handleChange} required />
                                    <label for="floatingInput">City</label>
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput" placeholder="number" name="phone" onChange={handleChange} required />
                                <label for="floatingInput">Phone number</label>
                            </div>
                            <div className="form-floating mb-3" >
                            <input type="textarea" style={{ padding: "60px" }} className="form-control" id="floatingInput" placeholder="description" name="description" onChange={handleChange} />
                            <label for="floatingInput">Desciprion</label>
                        </div>

                        </div>

                         {/* card */}
                        <div className="col md 4">
                            <p>Card</p>

 {/* Right: Order Summary */}
                   

                            
                             <Link to="/Payment"> <button onClick={handleSubmit} type="submit" id='btn' style={{ width: "90%" }}>Continue payment</button><br /><br /></Link>
                             
                        </div>

                      

                        {/* last row */}

                        

                       
                    </div>
                </div>
            </form>
        </>
    )
}


