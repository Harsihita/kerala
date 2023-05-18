import React from "react"

export default function footer() {
    return (
        <>
        <div></div>
            <section className="footer-container-1">
                <div className="footer-item">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="footer-item-1">
                    <a><i class="fa-brands fa-facebook-f" ></i></a>
                    <a><i class="fa-brands fa-twitter"></i></a>
                    <a><i class="fa-brands fa-google" ></i></a>
                    <a><i class="fa-brands fa-instagram"></i></a>
                    <a><i class="fa-brands fa-linkedin"></i></a>
                    <a><i class="fa-brands fa-github"></i></a>
                </div>
                <hr className="line"></hr>
                <hr className="line"></hr>
            </section>
            <section className="footer-container-2">
                <div className="itemf-1">
                    <h6>Kerala</h6>
                    <p>We provide a amazing trips to kerala and guide you for an super fun trip in kerala.</p>

                </div>
                <div  className="itemf-2">
                    <h6>Menu</h6>
                    <p>Home</p>
                    <p>About</p>
                    <p>Things to do</p>
                </div>
                <div  className="itemf-3">
                    <h6>Support</h6>
                    <p>Services</p>
                    <p>Terms & Conditions</p>
                    <p>Contact-us</p>
                </div>

            </section>
        </>
    )
}