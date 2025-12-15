import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left info block */}
        
        <a className={styles.info} href="https://www.linkedin.com/in/jonathan-dh">
          © 2025 Jonathan H
        </a>

        {/* Navigation links */}
        <div className={styles.links}>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;