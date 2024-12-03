import React from "react";
import proyecto1 from "../assets/proyecto1.png";
import obras1 from "../assets/obras1.png";

export default function Proyectos() {
  const handleNetlifyClick = () => {
    window.open("https://portafolio-marc-martin-salido.netlify.app/", "_blank");
  };

  return (
    <section className="proyectos">
      <h1 className="proyectos-title">Mis Proyectos</h1>
      <div className="proyectos-grid">
        <div className="project-article">
          <h2>Proyecto 1</h2>
          <a href="https://portafolio-marc-martin-salido.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={proyecto1} alt="Proyecto 1" />
          </a>
          <button onClick={handleNetlifyClick} className="btn-link">
            Ver Proyecto
          </button>
        </div>

        <div className="project-article">
          <h2>Proyecto 2</h2>
          <img src={obras1} alt="Proyecto 2" />
          <button className="btn-link" disabled>
            Por ahora no hay más proyectos
          </button>
        </div>

        <div className="project-article">
          <h2>Proyecto 3</h2>
          <img src={obras1} alt="Proyecto 3" />
          <button className="btn-link" disabled>
            Por ahora no hay más proyectos
          </button>
        </div>
      </div>
    </section>
  );
}
