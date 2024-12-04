import Newsletter from "../components/newsletters"
export default function Newsletterpage() {
    return (
        <section className="Proyectos-Page">
            <div className="title-newsletter">
                <h1>
                    Mi newsletter personal, No te pierdas nada!!
                </h1>
            </div>
            <div className="info-newsletter">
                <p>
                    aqui encontrareis toda la informacion sobre esta pagina y sobre mi, asi como las actualizaciones que se iran realizando, no se olviden de suscribirse al newsletter para no perderse nada
                </p>
            </div>
            <div className="anuncios-grid3">
                <article className="anuncio">
                    <h2>
                        Tema 1
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, arcu sed fermentum tincidunt, metus tellus fermentum erat, et gravida ipsum nisi vel ipsum.
                    </p>
                </article>
                <article className="anuncio">
                    <h2>
                        Tema 2
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, arcu sed fermentum tincidunt, metus tellus fermentum erat, et gravida ipsum nisi vel ipsum.
                    </p>
                </article>
                <article className="anuncio">
                    <h2>
                        Tema 3
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, arcu sed fermentum tincidunt, metus tellus fermentum erat, et gravida ipsum nisi vel ipsum.
                    </p>
                </article>
            </div>
            <Newsletter />
        </section>
    );
}