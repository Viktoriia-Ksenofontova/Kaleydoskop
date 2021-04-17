import { Link, NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import Logo from '../Navigation/Logo/Logo';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <Logo />
        <p className={styles.footerText}>
          В 2017 році три Херсонські майстрині вирішили об’єднати зусилля для
          створення затишної крамниці виробів ручної роботи, в якій кожен може
          обрати унікальні витвори мистецтва на свій смак або замовити їх
          індивідуальне виготовлення. З жовтня 2017 року асортимент магазину
          поступово розширювався та наразі в магазині представлені вироби
          близько 40 видів прикладного мистецтва, та більше 64 майстрів з
          різноманітних міст України
        </p>
      </div>
      <div className={styles.footerNavigation}>
        <div className={styles.footerList}>
          <h3 className={styles.footerSubtitle}>Основні посилання</h3>
          <NavLink
            className={styles.footerLink}
            activeClassName={styles.footerLinkActive}
            to="/delivery"
            exact
          >
            Оплата та доставка
          </NavLink>
        </div>
        <div>
          <h3 className={styles.footerSubtitle}>Ми в соціальних мережах</h3>
          <Link
            href="https://www.facebook.com/kaleydoskop.shop/"
            className={styles.footerLink}
          >
            <FacebookIcon /> Фейсбук
          </Link>
          <Link
            href="https://www.instagram.com/kaleydoskop.shop/"
            className={styles.footerLink}
          >
            <InstagramIcon /> Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
