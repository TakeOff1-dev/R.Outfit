import '../css/Newproduct.css'

export default function Newproduct() {
    return (
        <>
            < br /> < br /> < br /> < br />  < br /><br /><br />

            <div className="container">
                <h3> Add New Product</h3>
                <div className="row">
                    <div className="col-md-6">
                        <p>Still to edit content</p>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Brand" required />
                            <label for="floatingInput">Brand</label>

                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="Price" required />
                            <label for="floatingInput">Price</label>
                        </div>

                        <span><b>Price</b> (Rand)...</span> <br />
                        <span><b>SKU</b>(Something in here)...</span>

                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInput" placeholder="Price" required />
                            <label for="floatingInput">Still to fill out</label>
                        </div>

                        <div class="form-floating">
                            <textarea class="form-control " placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "120px" }}></textarea>
                            <label for="floatingTextarea2">Description <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur <br /> itaque tempora esse et earum vitae, eveniet nisi. Itaque esse magnam <br /> ipsum odit unde eos suscipit dolor odio numquam alias. <br /><br /> </label>
                        </div>
                        <div className="btn">
                            <button type="button" class="btn btn-primary">Add Product</button>

                            <button type="button" class="btn btn-danger">Cancel Product</button>

                        </div>

                    </div>
                    <div className="col-md-6">

                        <p>Product image</p>
                        <div className="hhh">
                            <input type="file" name="" id="" className="new-product-img" />
                        </div>


                    </div>
                </div>
            </div>

        </>
    )
}