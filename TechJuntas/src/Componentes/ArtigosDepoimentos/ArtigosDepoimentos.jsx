import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Elements/Navbar/Navbar';
import './ArtigosDepoimentos.css';

const ArtigosDepoimentos = () => {
  const [cookies, , removeCookie] = useCookies(['session']);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('session', { path: '/' });
    navigate('/artigos');
  };

  const articles = [
    { 
      title: 'Mulheres na Tecnologia: Superando Barreiras e Construindo o Futuro', 
      content: 'Embora a indústria de tecnologia ainda seja dominada por homens, mulheres vêm quebrando barreiras e conquistando seu espaço. Neste artigo, discutimos as histórias de mulheres pioneiras na TI e como elas estão moldando o futuro da tecnologia.', 
      link: 'https://linkficticio.com/artigo1' 
    },
    { 
      title: 'Como Mulheres Estão Liderando o Caminho nas Startups de Tecnologia', 
      content: 'Mulheres empreendedoras estão liderando algumas das startups de tecnologia mais inovadoras do mercado. Este artigo explora o impacto das mulheres no ambiente das startups de TI e como elas estão moldando a inovação no setor.', 
      link: 'https://linkficticio.com/artigo2' 
    },
    { 
      title: 'A Importância da Diversidade de Gênero nas Equipes de TI', 
      content: 'Equipes de tecnologia mais diversas são mais criativas e inovadoras. Este artigo analisa como a inclusão de mulheres em equipes de TI pode impulsionar a inovação, aumentar a produtividade e promover uma cultura mais inclusiva no ambiente corporativo.', 
      link: 'https://linkficticio.com/artigo3' 
    },
    { 
      title: 'Programação e Design: Como Mulheres Estão Dominando Ambas as Áreas', 
      content: 'Cada vez mais, mulheres estão ocupando espaços de destaque no desenvolvimento de software e no design de interfaces. Este artigo foca nas histórias inspiradoras de mulheres que dominam tanto a programação quanto o design de experiências digitais.', 
      link: 'https://linkficticio.com/artigo4' 
    },
    { 
      title: 'Mentoria e Suporte: Como Mulheres em TI Estão Apoiando a Próxima Geração', 
      content: 'A mentoria desempenha um papel fundamental na inclusão de mulheres na TI. Neste artigo, discutimos como mulheres experientes na área de tecnologia estão mentoreando jovens profissionais e ajudando a criar um ambiente mais inclusivo e colaborativo.', 
      link: 'https://linkficticio.com/artigo5' 
    },
    { 
      title: 'A Influência da Inteligência Artificial no Empoderamento das Mulheres', 
      content: 'A inteligência artificial está desempenhando um papel crescente na promoção de oportunidades para mulheres na tecnologia. Este artigo explora como as tecnologias de IA estão criando novas chances para as mulheres em diversos campos da TI.', 
      link: 'https://linkficticio.com/artigo6' 
    },
  ];

  const testimonials = [
    { 
      title: '“Minha Jornada na Tecnologia: De Iniciante a Líder de Equipe”', 
      content: '“Comecei minha carreira em TI como desenvolvedora júnior e, com o apoio de outras mulheres incríveis, hoje sou líder de uma equipe de desenvolvimento. A jornada foi desafiadora, mas extremamente gratificante.”', 
      link: 'https://linkficticio.com/depoimento1' 
    },
    { 
      title: '“A Importância de Acreditar em Você: Minha Experiência como Mulher em TI”', 
      content: '“Enfrentei muitos desafios como mulher na tecnologia, mas sempre acreditei em mim mesma. Hoje, posso dizer com orgulho que sou uma desenvolvedora experiente e estou ajudando a criar um ambiente mais inclusivo na minha empresa.”', 
      link: 'https://linkficticio.com/depoimento2' 
    },
    { 
      title: '“Mulheres na Tecnologia: A Diversidade que Enriquecemos as Soluções”', 
      content: '“No começo, havia poucas mulheres na minha equipe, mas com o tempo conseguimos construir uma rede de apoio que tem nos ajudado a inovar mais. A diversidade de pensamento de todas as nossas profissionais fortalece nossas soluções tecnológicas.”', 
      link: 'https://linkficticio.com/depoimento3' 
    },
    { 
      title: '“Como a Mentoria Mudou Minha Trajetória em TI”', 
      content: '“Receber mentoria de mulheres que já estavam no mercado me deu confiança e as ferramentas necessárias para enfrentar os desafios de um ambiente predominantemente masculino. Hoje, sou mentora de novas desenvolvedoras e me sinto grata por poder retribuir.”', 
      link: 'https://linkficticio.com/depoimento4' 
    },
    { 
      title: '“Liderança Feminina na Tecnologia: O Caminho para o Sucesso”', 
      content: '“Como líder em TI, aprendi que a diversidade de gênero em uma equipe traz perspectivas únicas que ajudam na resolução de problemas complexos. Ser uma mulher em um cargo de liderança me impulsionou a quebrar barreiras e inspirar outras mulheres a seguirem o mesmo caminho.”', 
      link: 'https://linkficticio.com/depoimento5' 
    },
    { 
      title: '“Minha Trajetória no Mundo das Startups de Tecnologia”', 
      content: '“Entrei em uma startup de tecnologia como desenvolvedora e, com muita dedicação, consegui crescer dentro da empresa. A jornada foi cheia de desafios, mas também de aprendizados e vitórias. Estou orgulhosa de ser uma mulher que agora lidera um time de desenvolvedores.”', 
      link: 'https://linkficticio.com/depoimento6' 
    },
  ];

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="container"> 
        <div className="artigos">
          <h2>Artigos</h2>
          <div className="card-container">
            {articles.map((article) => (
              <div key={article.title} className="card">
                <h3>{article.title}</h3>
                <p className="text">{article.content}</p>
                <button onClick={() => window.open(article.link, '_blank')}>Leia mais</button>
              </div>
            ))}
          </div>
        </div>
        <div className="depoimentos">
          <h2>Depoimentos</h2>
          <div className="card-container">
            {testimonials.map((testimonial) => (
              <div key={testimonial.title} className="card">
                <h3>{testimonial.title}</h3>
                <p className="text">{testimonial.content}</p>
                <button onClick={() => window.open(testimonial.link, '_blank')}>Leia mais</button>
              </div>
            ))}
          </div>
        </div>
      </div>        
      <div className="footer-sobre">
        Desenvolvido pelo grupo 10 da turma de UPX6 2024.2 <br />
        Protegido por Copyright
        </div>
    </div>
  );
};

export default ArtigosDepoimentos;
