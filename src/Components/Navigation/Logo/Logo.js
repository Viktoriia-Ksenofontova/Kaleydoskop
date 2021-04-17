import { NavLink } from 'react-router-dom';
import logo from './logo.jpg';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <NavLink to="/" exact>
        <img src={logo} width="65" alt="logo" />
      </NavLink>
      <p className={styles.logoText}> Kaleydoskop shop </p>
    </div>
  );
}
