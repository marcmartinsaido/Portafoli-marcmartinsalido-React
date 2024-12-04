import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef();
    const [alertMessage, setAlertMessage] = useState("Rellena el formulario porfavor");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_axbau7r",
            "template_ss7o3nb",
            form.current,
            "_65XZnX_BJYa51Dnp"
        )
            .then((result) => {
                console.log(result.text);
                setAlertMessage("Mensaje enviado correctamente");
            })
            .catch((error) => {
                console.error(error.text);
                setAlertMessage("Error enviando el mensaje");
            });
    };

    return (
        <section className="contactContainer">
            <div className="contact">
                <h2 className="contactTitle"> Contact Me</h2>
                <span className="contactDesc">Rellena el formulario para contactarnos</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        className="name"
                        placeholder="Name"
                        name="from_name"
                        required
                    />
                    <input
                        type="email"
                        className="email"
                        placeholder="Email"
                        name="from_email"
                        required
                    />
                    <textarea
                        name="message"
                        className="message"
                        rows="5"
                        placeholder="Your message here"
                        required
                    ></textarea>
                    <button type="submit" value="Send" className="formBtn">
                        Send
                    </button>
                    <div
                        className={`alert ${alertMessage.includes("successfully") ? "success" : "error"
                            }`}
                    >
                        {alertMessage}
                    </div>
                </form>
            </div>
        </section>
    );
}
