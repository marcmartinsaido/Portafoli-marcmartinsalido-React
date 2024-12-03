import { GoFileCode } from "react-icons/go";


export default function Navbar() {
    return (
        <header>
            <section className="top-header">
                <div className="tittle-container-left">
                    <h3>
                    <GoFileCode />mms.react 
                    </h3>
                </div>
                <div className="tittle-container-right">
                    <h3>
                    Version 1.00
                    </h3>
                </div>
            </section>
        </header>
    )
}