import React from 'react'
import styles from "./Testimonial.module.css"
const Testimonial = () => {
  return (
    <div className={styles.Testimonial}>
        <div>
        <div className={styles.topflex}>
          <div className={styles.topflexone}>
            <div><img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/user-1.png" alt="userone_img" /></div>
            <div> <span className={styles.name}>Viezh Robert</span> <br />
            <span className={styles.address}> Warsaw, Poland</span></div>
          </div>
          <div className={styles.topflextwo}>
            <div>4</div>
            <div>⭐</div>
          </div>
        </div>
        <br />
        <div className={styles.bottomflex}>“Wow...I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</div>
        </div>
        <div>
        <div className={styles.topflex}>
          <div className={styles.topflexone}>
            <div><img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/user-2.png" alt="userone_img" /></div>
            <div> <span className={styles.name}>  Kim Young Jou </span><br /> 
           <span className={styles.address}>Seoul, South Korea</span></div>
          </div>
          <div className={styles.topflextwo}>
            <div>4.5</div>
            <div>⭐</div>
          </div>
        </div>
        <br />
        <div className={styles.bottomflex}>“I like it because I like to travel far and still can connect with high speed.”</div>
        </div>
        <div>
        <div className={styles.topflex}>
          <div className={styles.topflexone}>
            <div><img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/user-3.png" alt="userone_img" /></div>
            <div> <span className={styles.name}>Viezh Robert</span><br /> 
            <span className={styles.address}>Shanxi, China</span></div>
          </div>
          <div className={styles.topflextwo}>
            <div>5</div>
            <div>⭐</div>
          </div>
        </div>
        <br />
        <div className={styles.bottomflex}>like it because I like to travel far and still can connect with high speed”.</div>
        </div>
    </div>
  )
}

export default Testimonial