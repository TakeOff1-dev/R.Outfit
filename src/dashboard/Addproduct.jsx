import { useState } from 'react'
import axios from 'axios'

export default function Addproduct() {


    const [data, setData] = useState({
        name: "",
        description: "",
        image: "",
        category: "",
        price: "",
        quantity: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
        console.log(setData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/product", data);
            console.log("API Response:", response.data);
            alert("Data submitted successfully!");
        } catch (error) {
            console.error("Error submitting data:", error);
            alert("Something went wrong!");
        }

    }
   

    return (
        <> <br /><br /><br /><br /><br /><br /><br /><br />

            <form action="" onSubmit={handleSubmit}>
                <div className="container" id="shipping-bg">
                    <h2> Add Product</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Usernmae" name='name' onChange={handleChange} value={data.name} required />
                                <label for="floatingInput">Product name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Usernmae" name="description" onChange={handleChange} required />
                                <label for="floatingInput">Product description</label>
                            </div>
                            <input type="file" style={{ width: "100%" }} name="image" onChange={handleChange} />


                        </div>

                        <div className="col-md-6">

                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Usernmae" name="category" onChange={handleChange} required />
                                <label for="floatingInput">Cateogry</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" id="floatingInput" placeholder="Usernmae" name="price" onChange={handleChange} required />
                                <label for="floatingInput">Price</label>
                                <br />
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInput" placeholder="Usernmae" name="quantity" onChange={handleChange} required />
                                    <label for="floatingInput">Quantity</label>
                                </div>



                                <br />
                                <button type="submit" id='btn' style={{ width: "90%" }}>Add Product</button><br /><br />

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
