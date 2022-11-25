import React from 'react'
import styles from './Map.module.css'
const Map = () => {
  return (
   <div>
    <div className={styles.map}>
        <img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/map.png" alt="World Map img"/>
    </div>
    <br/>
  <div className={styles.logos}>
    <div> <img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/netflix.png" alt="netflix_img" />
    </div>
    <div><img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/reddit.png" alt="reddit_img" /> </div>
    <div>
        <img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/amazon.png" alt="amazon_img" />
    </div>
    <div> <img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/discord.png" alt="discord_img" /></div>
    <div>
        <img src="https://technext.github.io/LaslesVPN/v1.0.0/assets/img/gallery/spotify.png" alt="spotify_img" />
    </div>
  </div>

<br /><br />
    </div>
  )
}

export default Map;