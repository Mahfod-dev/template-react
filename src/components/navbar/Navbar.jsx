import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__menu}>
        <li className={styles.navbar__item}>
          <Link to="/" className={styles.navbar__link}>
            Home
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/about" className={styles.navbar__link}>
            About
          </Link>
        </li>
        <li className={styles.navbar__item}>
          <Link to="/contact" className={styles.navbar__link}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
