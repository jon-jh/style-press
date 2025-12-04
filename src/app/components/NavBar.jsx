
import styles from '../styles/NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <a href="/" className={styles.logo}>StylePress</a>
      <div className={styles.links}>
        <a href="/placeholder">Option a</a>
        <a href="/placeholder">Option b</a>
        <a href="/placeholder">Option c</a>
        <a href="/placeholder">Option d</a>
      </div>
      <div className={styles.profile}>
        <img src="/globe.svg" />
      </div>
    </div>
  );
};

export default NavBar;
