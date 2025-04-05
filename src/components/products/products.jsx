import styles from "../products/products.module.css";
import Flip from "../../assets/img/uno-flip.png";
import Dos from "../../assets/img/uno-dos.png";
import Original from "../../assets/img/uno-original.png";
import Masters from "../../assets/img/uno-masters.png";
import Barbie from "../../assets/img/uno-barbie.png";
import Minimalist from "../../assets/img/uno-minimalista.png";

const Products = () => {
  return (
    <section className={styles.productsHero}>
      <div className={styles.productsWrapper}>
        <div className={styles.productsContainer}>
          <h2>Escolha Seu UNO</h2>
          <a className={styles.btnFilter} href="">
            Filtrar
          </a>
        </div>
        <div className={styles.productsArea}>
          <div className={styles.productsCard}>
            <div className={styles.imgProduct}>
              <img src={Flip} alt="Flip" />
            </div>
            <h3>UNO® Flip SIOC</h3>
            <h4>R$ 104,99</h4>
            <div className={styles.btnBuy}>
              <a href="">Comprar</a>
            </div>
          </div>

          <div className={styles.productsCard}>
            <div className={styles.imgProduct}>
              <img src={Dos} alt="Dos" />
            </div>
            <h3>UNO® Dos</h3>
            <h4>R$ 50,00</h4>
            <div className={styles.btnBuy}>
              <a href="">Comprar</a>
            </div>
          </div>

          <div className={styles.productsCard}>
            <div className={styles.imgProduct}>
              <img src={Original} alt="Original" />
            </div>
            <h3>UNO® Original</h3>
            <h4>R$ 29,90</h4>
            <div className={styles.btnBuy}>
              <a href="">Comprar</a>
            </div>
          </div>

          <div className={styles.productsCard}>
            <div className={styles.imgProduct}>
              <img src={Masters} alt="Masters" />
            </div>
            <h3>UNO® Masters</h3>
            <h4>R$ 34,99</h4>
            <div className={styles.btnBuy}>
              <a href="">Comprar</a>
            </div>
          </div>

          <div className={styles.productsCard}>
            <div className={styles.imgProduct}>
              <img src={Masters} alt="Masters" />
            </div>
            <h3>UNO® Masters</h3>
            <h4>R$ 34,99</h4>
            <div className={styles.btnBuy}>
              <a href="">Comprar</a>
            </div>
          </div>

          <div className={styles.productsCard}>
            <div className={styles.imgProduct}>
              <img src={Barbie} alt="Masters" />
            </div>
            <h3>UNO® Barbie</h3>
            <h4>R$ 23,99</h4>
            <div className={styles.btnBuy}>
              <a href="">Comprar</a>
            </div>
          </div>

          <div className={styles.productsCard}>
            <div className={styles.imgProduct}>
              <img src={Dos} alt="Masters" />
            </div>
            <h3>UNO® Dos</h3>
            <h4>R$ 50,00</h4>
            <div className={styles.btnBuy}>
              <a href="">Comprar</a>
            </div>
          </div>

          <div className={styles.productsCard}>
            <div className={styles.imgProduct}>
              <img src={Flip} alt="Masters" />
            </div>
            <h3>UNO® Flip SIOC</h3>
            <h4>R$ 104,99</h4>
            <div className={styles.btnBuy}>
              <a href="">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
