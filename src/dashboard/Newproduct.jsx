import '../css/Newproduct.css'

export default function Newproduct() {
    return (
        <>
            < br />

            <div className="container">
                <h3> Add New Product</h3>
                <div className="row">
                    <div className="col-md-6">
                        <p>Still to edit content</p>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Brand" required />
                            <label for="floatingInput"> <b>Name</b> (e.g. slim fit denim jacket)</label>

                        </div>
                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Brand" required />
                            <label for="floatingInput"> <b>Brand</b> (e.g.  Uni-Style Co.hbfda)</label>

                        </div>
                        <div className="form-floating mb-2">
                            <input type="number" className="form-control" id="floatingInput" placeholder="Price" required />
                            <label for="floatingInput"><b>Price</b></label>
                        </div>

                        <span><b>Price</b> (Rand)...</span> <br />
                        <span><b>SKU</b>(Something in here)...</span>

                        <div className="form-floating mb-2">
                            <input type="text" className="form-control" id="floatingInput" placeholder="Price" required />
                            <label for="floatingInput">e.g. edration fiate nalt you sur tering</label>
                        </div>

                        <div class="form-floating">
                            <textarea class="form-control " placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "120px" }}></textarea>
                            <label for="floatingTextarea2"> <b>Description</b> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tenetur <br /> itaque tempora esse et earum vitae, eveniet nisi. Itaque esse magnam <br /> ipsum odit unde eos suscipit dolor odio numquam alias. <br /><br /> </label>
                        </div>
                        <div className="btn">
                            <button type="button" class="btn btn-primary">Add Product</button>

                            <button type="button" class="btn btn-danger">Cancel Product</button>

                        </div>

                    </div>
                    <div className="col-md-6">

                        <p>Product image</p>
                        <div className="select-image">
                            <input type="file" name="" id="" className="new-product-img" />
                        </div>
                        <br />
                        <div className="d-flex">
                            <div className="selected-images-1">
                                Front image
                            </div>
                            <div className="selected-images-1">
                                Back image
                            </div>
                        </div>
                        <br />
                        {/* dropdown */}
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <b>Categories </b> (e.g. Tops, Shorts)
                            </button>
                            <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                                <li><a class="dropdown-item active" href="#">Tops</a></li>
                                <li><a class="dropdown-item" href="#">Shorts</a></li>
                            </ul>
                        </div>

                        <hr />

                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <b>Gender </b> (e.g. Male, Female)
                            </button>
                            <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                                <li><a class="dropdown-item active" href="#">Male</a></li>
                                <li><a class="dropdown-item" href="#">Female</a></li>
                            </ul>
                        </div>


                        <hr />
                        {/* colors */}
                        <p>Select color</p>
                        <div className="color">
                            <p id="color-1"></p>
                            <p id="color-2"></p>
                            <p id="color-3"></p>
                            <p id="color-4"></p>
                            <p id="color-5"></p>
                            <p id="color-6"></p>
                        </div>
                        <br />
                        {/* buttons sizes */}

                        <label htmlFor="">Available Sizes</label>
                        <br />
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button type="button" class="btn btn-danger">XS</button>
                            <button type="button" class="btn btn-warning">SM</button>
                            <button type="button" class="btn btn-success">M</button>
                            <button type="button" class="btn btn-danger">L</button>
                            <button type="button" class="btn btn-warning">XL</button>
                            <button type="button" class="btn btn-success">XXL</button>
                        </div>

                        <br /><br />



                    </div>
                </div>
            </div>

        </>
    )
}