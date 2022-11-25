import React from 'react'
import styles from './Box.module.css'
export const Box = () => {
  return (
    <div className={styles.Box}>
        <div className={styles.boxone}>       
        Huge Global Network      
        of Fast VPN       
        </div>
        <br/>
        <div className={styles.boxtwo}>
        See <span style={{fontWeight:"bold", color:"grey"}}>LaslesVPN</span> everywhere to make it easier for you when you move locations.
        </div>
    </div>
  )
}
