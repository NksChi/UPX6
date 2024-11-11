import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu, IoChevronDown, IoSearch } from 'react-icons/io5';
import TechJuntas from '../../../assets/TechJuntas.png';
import UserIcon from '../../../assets/User.png';
import styles from './Navbar.module.css';

const Navbar = ({ handleLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.leftSection}>
          <NavLink to="/" className={styles.navbarLogo}>
            <img src={TechJuntas} alt="Logo" />
          </NavLink>

          <button className={styles.navbarToggle} onClick={handleMenuToggle}>
            {isMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
          <ul className={`${styles.navbarMenu} ${isMenuOpen ? styles.navbarMenuIsOpen : ''}`}>
            <li className={styles.navbarItem}>
              <NavLink className={styles.navbarColor} to="/home" onClick={handleMenuToggle}>
                Sobre nós
              </NavLink>
            </li>
            <li className={styles.navbarItem}>
              <NavLink className={styles.navbarColor} to="/artigos" onClick={handleMenuToggle}>
                Artigos e Depoimentos
              </NavLink>
            </li>
            <li className={styles.navbarItem}>
              <NavLink className={styles.navbarColor} to="/vagas" onClick={handleMenuToggle}>
                Vagas Afirmativas
              </NavLink>
            </li>
            <li className={styles.navbarItem}>
              <NavLink className={styles.navbarColor} to="/cursos" onClick={handleMenuToggle}>
                Cursos
              </NavLink>
            </li>
          </ul>

          <div className={styles.navbarSearch}>
            <div className={styles.searchContainer}>
              <IoSearch className={styles.searchIcon} />
              <input type="text" placeholder="Pesquisar..." />
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.userMenu} onClick={handleUserMenuToggle}>
            <img src={UserIcon} alt="Ícone de usuário" className={styles.userIcon} />
            <IoChevronDown className={styles.userMenuIcon} />
            <ul className={`${styles.userDropdown} ${isUserMenuOpen ? styles.userDropdownIsOpen : ''}`}>
              <li>
                <NavLink to="#">Meu Perfil</NavLink>
              </li>
              <li>
                <NavLink to="#">Configurações</NavLink>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;