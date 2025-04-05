import styles from "../benefits/benefits.module.css";
import Shield from "../../assets/img/shild-icon.svg";
import Box from "../../assets/img/box-icon.svg";
import Media from "../../assets/img/media-icon.svg";
import Rocket from "../../assets/img/rocket-icon.svg";

const Benefits = () => {
  return (
    <section className={styles.benefitsHero}>
      <div className={styles.wrapperHero}>
        <div className={styles.heroContainer}>
          <h2>Benefícios de Jogar UNO</h2>
          <p>
            Saiba mais sobres os benefícios de jogar UNO com seus amigos e
            família.
          </p>
        </div>
        <div className={styles.benefitsIcon}>
          <div className={styles.BoxIconWrapper}>
            <div className={styles.BoxIcon}>
              <img src={Shield} alt="Shield" />
            </div>
            <p>Divirta-se com segurança.</p>
          </div>
          <div className={styles.BoxIconWrapper}>
            <div className={styles.BoxIcon}>
              <img src={Box} alt="Box" />
            </div>
            <p>Pensamentos fora da caixinha.</p>
          </div>
          <div className={styles.BoxIconWrapper}>
            <div className={styles.BoxIcon}>
              <img src={Media} alt="Media" />
            </div>
            <p>Ativa o seu lado criativo.</p>
          </div>
          <div className={styles.BoxIconWrapper}>
            <div className={styles.BoxIcon}>
              <img src={Rocket} alt="Rocket" />
            </div>
            <p>Estimula o raciocínio rápido.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
