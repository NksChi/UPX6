import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Elements/Navbar/Navbar'; 
import './SobreNos.css'; 

const SobreNos = () => {
  const [cookies, , removeCookie] = useCookies(['session']);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.session) {
      navigate('/login');
    }
  }, [cookies.session, navigate]);

  const handleLogout = () => {
    removeCookie('session', { path: '/' });
    navigate('/login');
  };

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="content">
        {cookies.session ? (
          <div>
            <h2>Bem-vindas ao TechJuntas!</h2>
            <p>
            No TechJuntas, acreditamos que a diversidade é uma força poderosa que pode transformar a tecnologia. 
            Nosso projeto nasceu da vontade de criar um espaço que apoie e valorize a presença de mulheres, cis e trans, nesse universo.
            </p>
            <p>
            A desigualdade de gênero na tecnologia é um desafio que ainda enfrentamos, mas acreditamos que, ao entender suas raízes e 
            trabalhar juntas, podemos construir um futuro mais igualitário, onde todos têm a chance de contribuir de maneira significativa.
            </p>
            <h3>Nossa missão</h3>
            <p>
            O blog do TechJuntas busca ser um ambiente acolhedor, onde exploramos as questões de gênero na tecnologia com um olhar cuidadoso e construtivo. 
            Queremos educar, inspirar e apoiar mulheres em todas as fases de suas trajetórias profissionais, oferecendo informações úteis e criando oportunidades de crescimento e aprendizado.
            </p>
          </div>
        ) : (
          <div>
            <p>Você não está autenticado.</p>
            <p>Faça login para acessar esta página.</p>
            <button onClick={() => navigate('/login')}>Login</button>
          </div>
        )}
      </div>
      <div className="footer-sobre">
        Desenvolvido pelo grupo 10 da turma de UPX6 2024.2 <br />
        Protegido por Copyright
      </div>
    </div>
  );
}

export default SobreNos;