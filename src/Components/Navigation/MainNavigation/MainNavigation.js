import { NavLink } from 'react-router-dom';
import styles from './MainNavigation.module.css';

export default function MainNavigation() {
  return (
    <div>
      <NavLink
        className={styles.headerLink}
        activeClassName={styles.headerLinkActive}
        to="/"
        exact
      >
        Головна
      </NavLink>
      <NavLink
        className={styles.headerLink}
        activeClassName={styles.headerLinkActive}
        to="/catalog"
        exact
      >
        Каталог
      </NavLink>
      <NavLink
        className={styles.headerLink}
        activeClassName={styles.headerLinkActive}
        to="/news"
        exact
      >
        Новинки
      </NavLink>
      <NavLink
        className={styles.headerLink}
        activeClassName={styles.headerLinkActive}
        to="/delivery"
        exact
      >
        Оплата та доставка
      </NavLink>
    </div>
  );
}
