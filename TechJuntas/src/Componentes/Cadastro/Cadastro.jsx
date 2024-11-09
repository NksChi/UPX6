import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Elements/Navbar/Navbar';
import Server from '../../assets/Server_Icon.png';
import './Cadastro.css';

const Cadastro = () => {
  const [cookies, , removeCookie] = useCookies(['session']);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('session', { path: '/' });
    navigate('/cadastro');
  };

  const [nomeProduto, setNomeProduto] = useState('');
  const [marca, setMarca] = useState('');
  const [valor, setValor] = useState('');
  const [numeroSerie, setNumeroSerie] = useState('');
  const [valorS, setValorS] = useState('');
  const [tipo, setTipo] = useState('');
  const [dataFabricacao, setDataFabricacao] = useState('');

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const produto = {
      nomeProduto,
      marca,
      valor,
      numeroSerie,
      valorS,
      tipo,
      dataFabricacao,
    };

    try {
      const response = await fetch('http://localhost:5000/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(produto),
      });

      if (response.ok) {
        setMessage('Cadastro bem-sucedido!');
        setIsSuccess(true);
        clearFields();
      } else {
        setMessage('Erro ao cadastrar.');
        setIsSuccess(false);
      }
    } catch (error) {
      setMessage('Erro na requisição.');
      setIsSuccess(false);
    }
  };

  const clearFields = () => {
    setNomeProduto('');
    setMarca('');
    setValor('');
    setNumeroSerie('');
    setValorS('');
    setTipo('');
    setDataFabricacao('');
  };

  return (
    <div>
      <div className="register">
        <Navbar handleLogout={handleLogout} />
        <div className="page-container">
          <h1>Cadastro de Equipamentos</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nomeProduto">Nome do produto:</label>
            <input
              type="text"
              id="nomeProduto"
              value={nomeProduto}
              onChange={(event) => setNomeProduto(event.target.value)}
            />

            <label htmlFor="marca">Marca:</label>
            <input
              type="text"
              id="marca"
              value={marca}
              onChange={(event) => setMarca(event.target.value)}
            />

            <label htmlFor="valor">Valor:</label>
            <input
              type="number"
              id="valor"
              value={valor}
              onChange={(event) => setValor(event.target.value)}
            />

            <label htmlFor="numeroSerie">N° de série:</label>
            <input
              type="text"
              id="numeroSerie"
              value={numeroSerie}
              onChange={(event) => setNumeroSerie(event.target.value)}
            />

            <label htmlFor="valorS">Valor Sugerido:</label>
            <input
              type="number"
              id="valorS"
              value={valorS}
              onChange={(event) => setValorS(event.target.value)}
            />

            <label htmlFor="tipo">Tipo:</label>
            <select
              id="tipo"
              value={tipo}
              onChange={(event) => setTipo(event.target.value)}
            >
              <option value="Servidor">Servidor</option>
              <option value="Notebook">Notebook</option>
              <option value="Impressora">Impressora</option>
              <option value="Outro">Outro</option>
            </select>

            <label htmlFor="dataFabricacao">Data de fabricação:</label>
            <input
              type="date"
              id="dataFabricacao"
              value={dataFabricacao}
              onChange={(event) => setDataFabricacao(event.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>
          {message && (
            <div className={isSuccess ? 'success-message' : 'error-message'}>
              {message}
            </div>
          )}
        </div>
        <div className="image-container">
          <img src={Server} alt="Server" className="top-image" />
        </div>
      </div>
      <div className="footer-regis">
        &copy; {new Date().getFullYear()} TechLifeCycle. Todos os direitos reservados. <span className='upx'> / UPX5 - GRUPO 8 </span>
      </div>
    </div>
  );
};

export default Cadastro;
