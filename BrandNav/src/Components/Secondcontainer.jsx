import React from "react";
import styles from "./Secondcontainer.module.css";
const Secondcontainer = () => {
  return (
    <div className={styles.outercontainer}>
      <div className={styles.leftcontainer}>
        <div className={styles.leftcontainerone}>
          <p>
            Want anything to be easy with
            <span className={styles.outertxt}> LaslesVPN </span>
          </p>
        </div>

        <div className={styles.leftcontainertwo}>
          <p>
            Provide a network with all your needs with ease and fun using
            <span className={styles.innertxt}> LaslesVPN </span> <br />
            discovers interesting features from us.
          </p>
        </div>
        <br />
        <div>
          <button className={styles.getstarted}>Get Started</button>
        </div>
      </div>
      <div className={styles.rightcontainer}>
        <img
          src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/illustrations/1.png"
          alt="Student_reading_img"
        />
      </div>
    </div>
  );
};

export default Secondcontainer;
