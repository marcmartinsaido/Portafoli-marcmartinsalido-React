import React, { useState } from "react";


export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage("¡Gracias por suscribirte!");
        setEmail("");
    };
    

    return (
        <div className="newsletter-main">
            <h1>Subscribe to Newsletter!!</h1>
            <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={handleInputChange}
                    className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                    Suscribirse
                </button>
            </form>
            {message && <p className="newsletter-message">{message}</p>}
        </div>
    );
}
