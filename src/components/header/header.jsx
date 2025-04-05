import styles from "../header/header.module.css";
import LogoHeader from "../../assets/img/uno-logo.png";
import Button from "../button/button";

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.headerContainer}>
        <div className={styles.wrapperHeader}>
          <div className={styles.logoHeader}>
            <a href="">
              <img src={LogoHeader} alt="Logo UNO" />
            </a>
          </div>
          <nav className={styles.navHeader}>
            <ul className={styles.ulMenu}>
              <li>
                <a href="">Início</a>
              </li>
              <li>
                <a href="">Onde Encontrar</a>
              </li>
              <li>
                <a href="">Novos Produtos</a>
              </li>
              <li>
                <a href="">Créditos</a>
              </li>
              <li>
                <a className={styles.btnLogin} href="">Entrar</a>
              </li>
              <li>
                <a href="">Cadastre-Se</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
