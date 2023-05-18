import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import contactus from "../images/contact-us.png"

export default function Contactus() {
    return (
        <>
            <div className="main-contact" id="contact">
                <div className="contact">
                    <h1>Contact Us</h1>
                    <div className="grid-container">
                        <div className="contact-1">
                            <p>Feel free to contact us. Request a call by entering your phone in the column below.
                            We'll necesserialy call within 5 minutes.
                            </p>
                            
                            <form>
                                <input type="text"placeholder="Enter your phone" />
                                <input type="submit" placeholder="Request"/>
                            </form>
                            <div>
                                <div className="contact-item">
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>Navimurana, kerala</span>
                                </div>
                                <div  className="contact-item">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>harshitag1623@mail.com</span>
                                </div>
                                <div  className="contact-item">
                                <FontAwesomeIcon icon={faPhone} />
                                <span>9302480084</span>
                                </div>
                                
                            </div>

                        </div>
                        <div className="picture-contact">
                            <img src={contactus}></img>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}