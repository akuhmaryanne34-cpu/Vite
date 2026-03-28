import React from 'react'
import styles from "./Hero.module.css";


const Hero = () => {
  const Hero = () => {
    return (
      <div className={styles.hero}>
        <div className={styles.left}>
          <h2>
            Get Discount Voucher <br />
            <span>Up To 20%</span>
          </h2>

          <p>
            Complete your first order to claim Discount Vouchers. Free delivery.
          </p>
        </div>

        <div className={styles.right}>
          <img src="/images/heroImage.jpg" alt="Discount Banner" />
        </div>
      </div>
    );
  };
};

export default Hero
