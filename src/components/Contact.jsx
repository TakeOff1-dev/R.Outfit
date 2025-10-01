
import '../css/Contact.css'

export default function Contact() {
    return (
        <>
            <br />



            {/* form */}


            <form action="">
                <div className="container">
                    <div className="row">
                        <p>Contact Us</p>
                        <div className="col-md-">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="Usernmae" required />
                                <label for="floatingInput">Usernmae</label>
                            </div>
                            <div className="form-floating">
                                <input type="E-mail" class="form-control" id="floatingPassword" placeholder="name@example.com" required />
                                <label for="floatingPassword">name@example.com</label>
                            </div>
                            <br />
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }}></textarea>
                                <label for="floatingTextarea2">Comments</label>
                            </div>
                            <br />
                            <button type="button" class="btn btn-primary" style={{ "width": "100%", "text-align": "center" }}>Submit</button>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </form>


        </>
    )
}