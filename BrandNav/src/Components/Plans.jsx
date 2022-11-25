import React from 'react'
import styles from './Plans.module.css'
export const Plans = () => {
  return (
    <div>
       <br/> <br/>
                  <div className={styles.planname}>Choose Your Plan</div>
                  <br /><br />
                  <div className={styles.plandetail}>Let's choose the package that is best for you and explore it happily and cheerfully.</div>
        <br /><br />
    <div className={styles.plans}>
        <div>
            <div><img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/icons/pricing.png" alt="free items list" /></div>
            <h4>Free Plan</h4>
            <div className={styles.planone}>
            <div> <div>✔️</div> <div>Unlimited Bandwidth</div></div>
            <div><div>✔️</div> <div> Encrypted Connection</div> </div>
            <div><div>✔️</div> <div> No Traffic Logs</div></div>
            <div><div>✔️</div><div>Works on All Devices</div></div>
            </div>
            <div style={{fontSize:"25px", fontWeight:"bolder", fontFamily:"sans-serif,arial"}}>Free</div>
            <button className={styles.select}>Select</button>
        </div>
      
        <div>
            <div><img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/icons/pricing.png" alt="free items list" /></div>
            <h4>Standard Plan</h4>
            <div className={styles.planone}>
            <div> <div>✔️</div> <div>Unlimited Bandwidth</div></div>
            <div><div>✔️</div> <div> Encrypted Connection</div> </div>
            <div><div>✔️</div> <div> No Traffic Logs</div></div>
            <div><div>✔️</div><div>Works on All Devices</div></div>
            <div><div>✔️</div><div>Connect Anywhere</div></div>
            </div>
            <div><span style={{fontSize:"25px", fontWeight:"bolder", fontFamily:"sans-serif,arial"}}>$9</span>/month</div>
            <button className={styles.select}>Select</button>
        </div>
        <div>
            <div><img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/icons/pricing.png" alt="free items list" /></div>
            <h4>Premium Plan</h4>
            <div className={styles.planone}>
            <div> <div>✔️</div> <div>Unlimited Bandwidth</div></div>
            <div><div>✔️</div> <div> Encrypted Connection</div> </div>
            <div><div>✔️</div> <div> No Traffic Logs</div></div>
            <div><div>✔️</div><div>Works on All Devices</div></div>
            <div><div>✔️</div><div>Connect Anywhere</div></div>
            <div><div>✔️</div><div>Get new Features</div></div>
            </div>
            <div><span style={{fontSize:"25px", fontWeight:"bolder", fontFamily:"sans-serif,arial"}}>$12</span>/month</div>
            <button className={styles.select}>Select</button>
        </div>
        </div>
        </div>
        

    
  )
}
