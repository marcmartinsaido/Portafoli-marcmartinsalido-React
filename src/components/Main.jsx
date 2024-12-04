import Skills from "./Skills";
import Newsletter from "./newsletters";

export default function Main() {
    return (
        <main className="main-container">
            <h1 className="main-title">
                About me
            </h1>
            <div className="cards-main">
                <div className="aboutme-article">
                    <h2>
                        Estudios:
                    </h2>
                    <br />
                    <ul>
                        <li>
                            Educación secundaria obligatoria
                        </li>
                        <br />
                        <li>
                            Grado medio sistema micro informáticos y redes
                        </li>
                        <br />
                        <li>
                            Grado superior administración de sistemas y redes (próximamente)
                        </li>
                    </ul>
                </div>
                <div className="aficiones-article">
                    <h2>
                        Aficiones y Hobbies:
                    </h2>
                    <br />
                    <ul>
                        <li>
                            Gaming
                        </li>
                        <br />
                        <li>
                            Deportes y ocio
                        </li>
                        <br />
                        <li>
                            Acuariofilia
                        </li>
                    </ul>
                </div>
            </div>
            <Skills />
            <Newsletter />
        </main>
    );
}