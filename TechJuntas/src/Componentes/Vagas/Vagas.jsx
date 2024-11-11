import React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Elements/Navbar/Navbar';
import './Vagas.css';

const Vagas = () => {
  const [cookies, , removeCookie] = useCookies(['session']);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('session', { path: '/' });
    navigate('/');
  };

  const vagas = [
    { titulo: 'Engenheira de Software', descricao: 'Desenvolvimento de sistemas robustos e escaláveis.', empresa: 'Tech Innovators' },
    { titulo: 'Analista de Dados', descricao: 'Análise de grandes volumes de dados para insights estratégicos.', empresa: 'Data Experts' },
    { titulo: 'Desenvolvedora Front-end', descricao: 'Criação de interfaces interativas e responsivas.', empresa: 'Creative Solutions' },
    { titulo: 'Gerente de Projetos', descricao: 'Coordenação de equipes multidisciplinares em projetos de TI.', empresa: 'Global Solutions' },
    { titulo: 'UX Designer', descricao: 'Desenvolvimento de experiências intuitivas para o usuário.', empresa: 'User First' },
    { titulo: 'Cientista de Dados', descricao: 'Modelagem e análise de dados para apoio na tomada de decisões.', empresa: 'Data Labs' },
    { titulo: 'DevOps Engineer', descricao: 'Automação e otimização de infraestrutura em nuvem.', empresa: 'CloudNet' },
    { titulo: 'Especialista em Segurança Cibernética', descricao: 'Proteção de sistemas e dados contra ameaças cibernéticas.', empresa: 'SecureTech' },
    { titulo: 'Desenvolvedora Mobile', descricao: 'Criação de aplicativos nativos e responsivos.', empresa: 'App Makers' },
  ];

  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <div className="container">
        <h2>Vagas Afirmativas para Mulheres na Tecnologia</h2>
        <p className="description">
          Oportunidades exclusivas para mulheres que buscam se destacar no setor de tecnologia. Explore as vagas e encontre o próximo passo em sua carreira.
        </p>
        <div className="card-container">
          {vagas.map((vaga, index) => (
            <div key={index} className="card">
              <h3>{vaga.titulo}</h3>
              <p className="empresa">{vaga.empresa}</p>
              <p className="descricao">{vaga.descricao}</p>
              <button className="apply-btn">Candidatar-se</button>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer-sobre">
        Desenvolvido pelo grupo 10 da turma de UPX6 2024.2<br />
        © 2024 - Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Vagas;
