import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Elements/Navbar/Navbar'; 
import TechLife from '../../assets/TechLifeCycle_Logo.png';
import './Home.css'; 

const Home = () => {
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
              No TechJuntas, acreditamos que a diversidade é a chave para a inovação e o progresso na tecnologia. Nosso projeto nasce da necessidade urgente de enfrentar a sub-representação de mulheres, cis e trans, nesse setor vital. A desigualdade de gênero na tecnologia não é apenas uma questão social; é um obstáculo ao desenvolvimento de soluções criativas e eficazes que beneficiam a todos.
            </p>
            <h3>Nossa missão</h3>
            <p>
              Nosso blog tem como missão proporcionar um espaço informativo e acolhedor que contextualize a disparidade de gênero na tecnologia, explorando suas causas históricas e sociais. Queremos educar, inspirar e empoderar mulheres em todas as etapas de suas jornadas profissionais na tecnologia, oferecendo recursos práticos e oportunidades reais.
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
      <div className="footer-home">
        &copy; {new Date().getFullYear()} TechJuntas. Todos os direitos reservados. 
        <div>
        </div>
        <span className='upx'> 
           UPX6 - GRUPO 10
        </span>
      </div>
    </div>
  );  
}

export default Home;