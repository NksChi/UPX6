import React, { useState } from 'react';
import Navbar from '../Elements/Navbar/Navbar';
import './Cursos.css';

const Cursos = () => {
  const [videos, setVideos] = useState([
    {
      title: 'Curso de JavaScript para Iniciantes - Programadora X',
      url: 'https://www.youtube.com/embed/W6NZfCO5SIk',
      description: 'Aprenda os conceitos básicos de JavaScript com uma abordagem focada para iniciantes.',
    },
    {
      title: 'React - Curso Completo para Iniciantes (em português)',
      url: 'https://www.youtube.com/embed/Ke90Tje7VS0',
      description: 'Curso completo de React, abordando desde os fundamentos até o uso de hooks.',
    },
    {
      title: 'Introdução ao Python para Iniciantes',
      url: 'https://www.youtube.com/embed/_uQrJ0TkZlc',
      description: 'Aprenda Python do básico ao intermediário. Ideal para quem está começando.',
    },
    {
      title: 'Aprenda HTML e CSS para Iniciantes',
      url: 'https://www.youtube.com/embed/Q33KBiDriJY',
      description: 'Curso focado em HTML e CSS, perfeito para quem deseja construir suas primeiras páginas web.',
    },
    {
      title: 'Git e GitHub para Iniciantes',
      url: 'https://www.youtube.com/embed/RGOj5yH7evk',
      description: 'Aprenda a versionar seu código e usar GitHub, uma habilidade essencial para qualquer programador.',
    }
  ]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="mt-4">Cursos de Programação</h1>
        <div className="row">
          {videos.map((video, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <iframe 
                    width="100%" 
                    height="200" 
                    src={video.url} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                  <p className="card-text">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-sobre">
        Desenvolvido pelo grupo 10 da turma de UPX6 2024.2 <br />
        Protegido por Copyright
      </div>
    </div>
  );
};

export default Cursos;
