import styles from "../footer/footer.module.css";
import LogoFooter from "../../assets/img/uno-logo.png";
import Insta from "../../assets/img/insta-icon.svg";
import Face from "../../assets/img/face-icon.svg";
import X from "../../assets/img/twitter-x.svg";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.wrapperFooter}>
        <div className={styles.footerContainer}>
          <img src={LogoFooter} alt="logo" />
          <p>
            Esta edição especial do UNO®, o jogo de cartas adorado por todos,
            tem um visual totalmente exclusivo. Concebida com uma estética
            minimalista, essa versão é um grande presente para colecionadores de
            UNO®.
          </p>
          <div className={styles.footerCopy}>
            <div className={styles.SocialMediaLogos}>
              <a href="">
                <img src={Insta} alt="Insta" />
              </a>
              <a href="">
                <img src={Face} alt="Face" />
              </a>
              <a href="">
                <img src={X} alt="X" />
              </a>
            </div>
            <p>© 2025 MATTEL. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
