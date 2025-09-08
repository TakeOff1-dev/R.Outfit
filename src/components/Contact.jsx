
import '../css/Contact.css'

export default function Contact() {
    return (
        <>
            <br />
            <div id="browse">
                <h4 style={{ "text-align": "center" }}>

                    <b > Get In Touch With Us </b>
                </h4>
                <p style={{ "text-align": "center" }}>
                    For More Information About Our Product & Services. Please Feel Free
                    To Drop Us An Email. <br />
                    Our Staff Always Be There To Help You Out. Do Not Hesitate
                </p>
            </div>


            {/* form */}

            <br />
            <form action="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3" id="contact">
                            <i className="bi bi-geo-alt-fill">
                                <b>Address</b>
                            </i>
                            <p>
                                236 5th SE Avenue, <br />
                                New York NY10000, <br />
                                United States
                            </p>

                            <br />

                            <i className="bi bi-telephone-fill">
                                <b>Phone</b>
                            </i>
                            <p>
                                Mobile: +(27) 062 512 3785 <br />
                                Hotline: +(27) 062 512 3785
                            </p>

                            <br />

                            <i className="bi bi-clock-fill">
                                <b>Working hours</b>
                            </i>
                            <p>
                                Monday-Friday: 9:00 - 22:00 <br />
                                Saturday-Sunday: 9:00 - 21:00
                            </p>
                        </div>
                        <div className="col-md-9">
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