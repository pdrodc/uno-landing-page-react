import styles from "../hero/hero.module.css";
import ImgHero from "../../assets/img/Caixa.png";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <div className={styles.wrapperHero}>
        <div className={styles.heroContainer}>
          <div>
            <h2>
              <span>UNO® minimalista, </span>representa uma excelente opção de
              presente para colecionadores!
            </h2>
            <p>
              Esta edição especial do UNO®, o jogo de cartas adorado por todos,
              tem um visual totalmente exclusivo.
            </p>
            <div className={styles.btnHero}>
              <a className={styles.btnKnow} href="#">
                Saiba Mais
              </a>
              <a className={styles.btnFind} href="#">
                Onde Encontrar
              </a>
            </div>
          </div>
          <div className={styles.ImgHero}>
            <img src={ImgHero} alt="box uno minimalist" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
