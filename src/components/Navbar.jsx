import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    return (
        <nav className="main-nav-center">
            <Link
                to="/"
                className={location.pathname === "/" ? "activate" : ""}
            >
                Home
            </Link>
            <Link
                to="/contact"
                className={location.pathname === "/contact" ? "activate" : ""}
            >
                Contact us
            </Link>
            <Link
                to="/proyectos"
                className={location.pathname === "/proyectos" ? "activate" : ""}
            >
                Proyectos
            </Link>
            <Link
                to="/newsletterpage"
                className={location.pathname === "/newsletterpage" ? "activate" : ""}
            >
                Newsletter
            </Link>
        </nav>
    );
}
