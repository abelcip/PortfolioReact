import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <div className="contenidomain">
        <h2>SOBRE MI </h2>
        <p>
          Soy Abel Cipriano, un apasionado desarrollador de software con
          experiencia en backend y frontend 
        </p>

        <h2>EDUCACION</h2>
        <ul>
          <li>
            Estudiante de Programación en la Facultad Regional Tucumán de la
            Universidad Tecnológica Nacional
          </li>
          <li>
            Cursos complementarios en desarrollo web, incluyendo HTML, CSS,
            JavaScript y React
            Curso Desarrollo.Net 
          </li>
        </ul>

        <h2>HABILIDADES</h2>
        <ul>
          <li> C# .NET ,ASP WEB MVC, JavaScript, HTML, CSS</li>
          <li>React, Bootstrap</li>
          <li>SQL server</li>
          <li>Git</li>
        </ul>

        <h2>EXPERIENCIA LABORAL</h2>
        <p>
          Pasantia realiaza en el ministerio de Educación
        </p>
      </div>
    </main>
  );
};

export default Main;