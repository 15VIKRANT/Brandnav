import React from 'react'
import styles from './Footer.module.css'
const Footer = () => {
  return (
      <div className={styles.main}>
          <div className={styles.footer}>
          <div className={styles.left_div}>
              <div className={styles.logo}>
                 
              <svg width="100%" height="100%" viewBox="0 0 71 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5745 12.3647C22.5118 12.3647 22.4586 12.3428 22.4147 12.299C22.3709 12.2551 22.349 12.2019 22.349 12.1392V6.0127C22.349 5.9438 22.3709 5.89055 22.4147 5.85296C22.4586 5.80911 22.5118 5.78719 22.5745 5.78719H23.4577C23.5267 5.78719 23.5799 5.80911 23.6175 5.85296C23.6613 5.89055 23.6833 5.9438 23.6833 6.0127V11.2372H26.662C26.7309 11.2372 26.7872 11.2591 26.8311 11.3029C26.8749 11.3468 26.8969 11.4 26.8969 11.4627V12.1392C26.8969 12.2019 26.8749 12.2551 26.8311 12.299C26.7872 12.3428 26.7309 12.3647 26.662 12.3647H22.5745ZM29.115 12.4587C28.7955 12.4587 28.5011 12.3961 28.2317 12.2708C27.9686 12.1392 27.7587 11.9638 27.6021 11.7446C27.4518 11.5253 27.3766 11.2841 27.3766 11.021C27.3766 10.5951 27.5489 10.2505 27.8934 9.98743C28.238 9.72433 28.7109 9.54579 29.3123 9.45183L30.5996 9.2639V9.06657C30.5996 8.7972 30.5307 8.59361 30.3929 8.4558C30.2551 8.31798 30.0358 8.24907 29.7351 8.24907C29.5284 8.24907 29.3624 8.28666 29.2371 8.36183C29.1118 8.437 29.0085 8.51531 28.927 8.59674C28.8519 8.67192 28.8017 8.72203 28.7767 8.74709C28.7516 8.82226 28.7046 8.85985 28.6357 8.85985H27.9028C27.8464 8.85985 27.7963 8.84105 27.7525 8.80347C27.7149 8.76588 27.6961 8.71577 27.6961 8.65312C27.7024 8.49651 27.7775 8.32111 27.9216 8.12692C28.0719 7.92646 28.3006 7.75419 28.6075 7.61011C28.9145 7.45977 29.2935 7.38459 29.7445 7.38459C30.4837 7.38459 31.0225 7.5506 31.3607 7.88261C31.699 8.21462 31.8681 8.64999 31.8681 9.18872V12.1392C31.8681 12.2019 31.8462 12.2551 31.8024 12.299C31.7648 12.3428 31.7115 12.3647 31.6426 12.3647H30.8627C30.8001 12.3647 30.7468 12.3428 30.703 12.299C30.6591 12.2551 30.6372 12.2019 30.6372 12.1392V11.7728C30.4994 11.9732 30.3052 12.1392 30.0546 12.2708C29.804 12.3961 29.4908 12.4587 29.115 12.4587ZM29.4344 11.5566C29.779 11.5566 30.0609 11.4439 30.2801 11.2184C30.4994 10.9929 30.609 10.6671 30.609 10.2411V10.0532L29.6694 10.2035C28.949 10.3163 28.5888 10.5575 28.5888 10.9271C28.5888 11.1275 28.6702 11.2841 28.8331 11.3969C29.0022 11.5034 29.2027 11.5566 29.4344 11.5566ZM34.9339 12.4587C34.4578 12.4587 34.06 12.3867 33.7405 12.2426C33.4211 12.0985 33.183 11.9325 33.0264 11.7446C32.8761 11.5504 32.8009 11.3844 32.8009 11.2466C32.8009 11.1839 32.8197 11.1338 32.8573 11.0962C32.9011 11.0586 32.9512 11.0398 33.0076 11.0398H33.7781C33.8282 11.0398 33.8721 11.0649 33.9097 11.115C33.941 11.1401 34.0099 11.1996 34.1164 11.2935C34.2292 11.3875 34.3544 11.4627 34.4923 11.5191C34.6363 11.5692 34.7929 11.5942 34.9621 11.5942C35.2127 11.5942 35.4163 11.5472 35.5729 11.4533C35.7295 11.3531 35.8078 11.2121 35.8078 11.0304C35.8078 10.9052 35.7702 10.8049 35.695 10.7298C35.6261 10.6483 35.4977 10.5763 35.3098 10.5136C35.1281 10.4447 34.8525 10.3696 34.4829 10.2881C33.9504 10.1754 33.5557 10.0031 33.2989 9.77131C33.0483 9.53953 32.923 9.23257 32.923 8.85045C32.923 8.59988 32.9982 8.36496 33.1486 8.14571C33.2989 7.9202 33.5213 7.73853 33.8157 7.60071C34.1164 7.45663 34.4735 7.38459 34.8869 7.38459C35.3129 7.38459 35.6794 7.4535 35.9863 7.59132C36.2933 7.72287 36.525 7.88261 36.6816 8.07054C36.8445 8.25847 36.926 8.42447 36.926 8.56855C36.926 8.62493 36.904 8.67505 36.8602 8.7189C36.8226 8.75648 36.7756 8.77528 36.7192 8.77528H36.0145C35.9456 8.77528 35.8923 8.75022 35.8548 8.70011C35.8109 8.66878 35.7389 8.61241 35.6386 8.53097C35.5447 8.44327 35.4382 8.37436 35.3192 8.32425C35.2001 8.27413 35.0561 8.24907 34.8869 8.24907C34.6551 8.24907 34.4766 8.29919 34.3513 8.39942C34.226 8.49965 34.1634 8.6312 34.1634 8.79407C34.1634 8.90683 34.1916 9.00079 34.248 9.07597C34.3106 9.15114 34.4327 9.22318 34.6144 9.29209C34.7961 9.35473 35.0686 9.42051 35.4319 9.48941C36.5595 9.70866 37.1233 10.2004 37.1233 10.9647C37.1233 11.4094 36.9291 11.7696 36.5407 12.0453C36.1586 12.3209 35.623 12.4587 34.9339 12.4587ZM38.3185 12.3647C38.2559 12.3647 38.2027 12.3428 38.1588 12.299C38.115 12.2551 38.093 12.2019 38.093 12.1392V5.91874C38.093 5.84983 38.115 5.79658 38.1588 5.759C38.2027 5.71515 38.2559 5.69322 38.3185 5.69322H39.1079C39.1768 5.69322 39.23 5.71515 39.2676 5.759C39.3114 5.79658 39.3334 5.84983 39.3334 5.91874V12.1392C39.3334 12.2019 39.3114 12.2551 39.2676 12.299C39.23 12.3428 39.1768 12.3647 39.1079 12.3647H38.3185ZM42.6938 12.4587C41.9922 12.4587 41.4347 12.2583 41.0212 11.8573C40.614 11.4564 40.3979 10.8864 40.3729 10.1472L40.3635 9.91226C40.3635 9.12921 40.5671 8.51218 40.9742 8.06114C41.3877 7.61011 41.9577 7.38459 42.6844 7.38459C43.4299 7.38459 44.003 7.61011 44.404 8.06114C44.8111 8.51218 45.0147 9.11355 45.0147 9.86527V10.0626C45.0147 10.1252 44.9928 10.1785 44.949 10.2223C44.9051 10.2662 44.8487 10.2881 44.7798 10.2881H41.6602V10.3633C41.6727 10.7141 41.7667 11.0054 41.9421 11.2372C42.1237 11.4627 42.3712 11.5754 42.6844 11.5754C43.0415 11.5754 43.3328 11.4314 43.5583 11.1432C43.6147 11.0743 43.6585 11.0336 43.6898 11.021C43.7212 11.0023 43.7744 10.9929 43.8496 10.9929H44.6765C44.7328 10.9929 44.7798 11.0085 44.8174 11.0398C44.8613 11.0712 44.8832 11.115 44.8832 11.1714C44.8832 11.3217 44.7924 11.5003 44.6107 11.707C44.4353 11.9074 44.1816 12.0829 43.8496 12.2332C43.5176 12.3835 43.1323 12.4587 42.6938 12.4587ZM43.718 9.48941V9.47062C43.718 9.10102 43.6241 8.8066 43.4361 8.58735C43.2545 8.36183 43.0039 8.24907 42.6844 8.24907C42.3649 8.24907 42.1143 8.36183 41.9327 8.58735C41.751 8.8066 41.6602 9.10102 41.6602 9.47062V9.48941H43.718ZM47.8725 12.4587C47.3964 12.4587 46.9986 12.3867 46.6791 12.2426C46.3596 12.0985 46.1216 11.9325 45.965 11.7446C45.8146 11.5504 45.7394 11.3844 45.7394 11.2466C45.7394 11.1839 45.7582 11.1338 45.7958 11.0962C45.8397 11.0586 45.8898 11.0398 45.9462 11.0398H46.7167C46.7668 11.0398 46.8106 11.0649 46.8482 11.115C46.8796 11.1401 46.9485 11.1996 47.055 11.2935C47.1677 11.3875 47.293 11.4627 47.4308 11.5191C47.5749 11.5692 47.7315 11.5942 47.9006 11.5942C48.1512 11.5942 48.3548 11.5472 48.5114 11.4533C48.668 11.3531 48.7463 11.2121 48.7463 11.0304C48.7463 10.9052 48.7087 10.8049 48.6336 10.7298C48.5647 10.6483 48.4362 10.5763 48.2483 10.5136C48.0666 10.4447 47.791 10.3696 47.4214 10.2881C46.889 10.1754 46.4943 10.0031 46.2375 9.77131C45.9869 9.53953 45.8616 9.23257 45.8616 8.85045C45.8616 8.59988 45.9368 8.36496 46.0871 8.14571C46.2375 7.9202 46.4598 7.73853 46.7543 7.60071C47.055 7.45663 47.412 7.38459 47.8255 7.38459C48.2514 7.38459 48.6179 7.4535 48.9249 7.59132C49.2318 7.72287 49.4636 7.88261 49.6202 8.07054C49.7831 8.25847 49.8645 8.42447 49.8645 8.56855C49.8645 8.62493 49.8426 8.67505 49.7987 8.7189C49.7612 8.75648 49.7142 8.77528 49.6578 8.77528H48.9531C48.8841 8.77528 48.8309 8.75022 48.7933 8.70011C48.7495 8.66878 48.6774 8.61241 48.5772 8.53097C48.4832 8.44327 48.3767 8.37436 48.2577 8.32425C48.1387 8.27413 47.9946 8.24907 47.8255 8.24907C47.5937 8.24907 47.4152 8.29919 47.2899 8.39942C47.1646 8.49965 47.1019 8.6312 47.1019 8.79407C47.1019 8.90683 47.1301 9.00079 47.1865 9.07597C47.2492 9.15114 47.3713 9.22318 47.553 9.29209C47.7346 9.35473 48.0071 9.42051 48.3705 9.48941C49.4981 9.70866 50.0618 10.2004 50.0618 10.9647C50.0618 11.4094 49.8676 11.7696 49.4793 12.0453C49.0971 12.3209 48.5615 12.4587 47.8725 12.4587ZM52.9203 12.3647C52.8138 12.3647 52.7261 12.3397 52.6572 12.2896C52.5945 12.2332 52.5507 12.1643 52.5256 12.0829L50.6275 6.06908L50.6087 5.98451C50.6087 5.9344 50.6275 5.89055 50.6651 5.85296C50.709 5.80911 50.7591 5.78719 50.8155 5.78719H52.0464C52.1404 5.78719 52.2156 5.81538 52.2719 5.87176C52.3346 5.92187 52.3753 5.97825 52.3941 6.04089L53.672 10.2881L54.9593 6.04089C54.9781 5.97198 55.0157 5.91247 55.0721 5.86236C55.1347 5.81224 55.213 5.78719 55.307 5.78719H56.5379C56.5943 5.78719 56.6413 5.80911 56.6789 5.85296C56.7165 5.89055 56.7353 5.9344 56.7353 5.98451C56.7353 6.01584 56.7321 6.04402 56.7259 6.06908L54.8184 12.0829C54.7996 12.1643 54.7557 12.2332 54.6868 12.2896C54.6242 12.3397 54.5396 12.3647 54.4331 12.3647H52.9203ZM57.8278 12.3647C57.7651 12.3647 57.7087 12.3428 57.6586 12.299C57.6148 12.2489 57.5929 12.1925 57.5929 12.1298V6.0315C57.5929 5.96259 57.6148 5.90621 57.6586 5.86236C57.7025 5.81224 57.7589 5.78719 57.8278 5.78719H60.487C61.3013 5.78719 61.9403 5.97198 62.4039 6.34158C62.8674 6.71118 63.0992 7.25304 63.0992 7.96718C63.0992 8.68131 62.8674 9.21691 62.4039 9.57398C61.9403 9.92478 61.3013 10.1002 60.487 10.1002H59.4158V12.1298C59.4158 12.1925 59.3939 12.2489 59.35 12.299C59.3062 12.3428 59.2498 12.3647 59.1809 12.3647H57.8278ZM60.44 8.75649C60.6968 8.75649 60.8973 8.69071 61.0414 8.55916C61.1917 8.42134 61.2669 8.22088 61.2669 7.95778C61.2669 7.71347 61.198 7.51615 61.0602 7.3658C60.9286 7.21546 60.7219 7.14028 60.44 7.14028H59.3876V8.75649H60.44ZM64.2053 12.3647C64.1426 12.3647 64.0863 12.3428 64.0361 12.299C63.9923 12.2489 63.9704 12.1925 63.9704 12.1298V6.0315C63.9704 5.96259 63.9923 5.90621 64.0361 5.86236C64.08 5.81224 64.1364 5.78719 64.2053 5.78719H65.2671C65.4112 5.78719 65.5177 5.8467 65.5866 5.96572L67.8041 9.47062V6.0315C67.8041 5.96259 67.8261 5.90621 67.8699 5.86236C67.9138 5.81224 67.9702 5.78719 68.0391 5.78719H69.2324C69.3013 5.78719 69.3577 5.81224 69.4016 5.86236C69.4454 5.90621 69.4673 5.96259 69.4673 6.0315V12.1204C69.4673 12.1893 69.4454 12.2489 69.4016 12.299C69.3577 12.3428 69.3013 12.3647 69.2324 12.3647H68.1706C68.0265 12.3647 67.92 12.3052 67.8511 12.1862L65.6429 8.82226V12.1298C65.6429 12.1987 65.6179 12.2551 65.5678 12.299C65.5239 12.3428 65.4675 12.3647 65.3986 12.3647H64.2053Z" fill="#0B132A"/>
<path d="M15.1075 6.90327L15.0973 6.89304C15.0964 6.89247 15.0958 6.8917 15.0954 6.89081L8.69592 0.491211L2.29654 6.89065C2.2958 6.89139 2.29465 6.89287 2.29465 6.89287L2.28409 6.9031C1.30553 7.88715 0.683981 9.17006 0.518242 10.5479C0.352502 11.9258 0.652086 13.3195 1.36937 14.5076C2.08665 15.6956 3.18046 16.6099 4.47693 17.1048C5.7734 17.5998 7.19812 17.6472 8.52461 17.2394C8.63623 17.2053 8.75554 17.2053 8.86717 17.2394C10.1936 17.647 11.6182 17.5996 12.9146 17.1046C14.211 16.6095 15.3047 15.6954 16.0219 14.5074C16.7391 13.3194 17.0388 11.9258 16.8731 10.548C16.7074 9.17023 16.0859 7.88732 15.1075 6.90327ZM4.57208 11.1233C4.54092 11.1544 4.51622 11.1915 4.49937 11.2321C4.48251 11.2728 4.47384 11.3164 4.47384 11.3604C4.48523 12.4899 4.80443 13.5948 5.39709 14.5564C5.41055 14.5782 5.41677 14.6038 5.41487 14.6293C5.41296 14.6548 5.40302 14.6791 5.38646 14.6987C5.36991 14.7183 5.34759 14.7321 5.3227 14.7382C5.29781 14.7443 5.27163 14.7424 5.24789 14.7328C4.80235 14.5453 4.39759 14.2729 4.05626 13.9307C3.35676 13.2311 2.96351 12.2824 2.96288 11.2931C2.96224 10.3038 3.35427 9.35458 4.05288 8.65409L8.69592 4.01149L13.3387 8.65409C14.0374 9.35449 14.4296 10.3037 14.4289 11.2931C14.4284 12.2824 14.035 13.2311 13.3355 13.9307C12.9942 14.2729 12.5894 14.5453 12.144 14.7328C12.1202 14.7424 12.094 14.7443 12.0691 14.7382C12.0442 14.7321 12.0219 14.7182 12.0053 14.6987C11.9888 14.6791 11.9788 14.6548 11.9769 14.6292C11.975 14.6037 11.9812 14.5781 11.9947 14.5563C12.5874 13.5948 12.9068 12.4899 12.9184 11.3604C12.9184 11.3164 12.9096 11.2728 12.8927 11.232C12.8757 11.1913 12.851 11.1544 12.8197 11.1232L10.6236 8.79385C10.6017 8.77558 10.5742 8.76559 10.5457 8.76559C10.5173 8.76559 10.4897 8.77558 10.4679 8.79385C10.446 8.81202 10.4313 8.83739 10.4262 8.8654C10.421 8.89342 10.4259 8.92225 10.44 8.94704C11.2929 10.4905 10.5594 12.7075 9.33635 13.9307L9.3299 13.9372C9.16109 14.1042 8.93319 14.1978 8.69575 14.1977C8.45828 14.1976 8.23044 14.1038 8.06175 13.9368L8.05581 13.9307C6.83227 12.7075 6.09922 10.4907 6.95227 8.94737C6.9663 8.92258 6.97119 8.89375 6.96608 8.86573C6.96098 8.83772 6.94622 8.81235 6.92436 8.79418C6.9025 8.77591 6.87495 8.76592 6.84648 8.76592C6.81801 8.76592 6.79045 8.77591 6.76859 8.79418L4.57208 11.1233Z" fill="#F53838"/>
</svg>
              </div>
              <div className={styles.mid}>
                  <p><span>LaslesVPN </span>
                       is a private virtual network that <br />
  has unique features and has high security.</p>
              </div>
              <div className={styles.icons}>
              <svg class="bi bi-facebook" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F53838" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                    </svg>
                    <svg class="bi bi-twitter" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F53838" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
                    </svg>
                    <svg class="bi bi-instagram" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F53838" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"> </path>
                    </svg>
              </div>
              <div className={styles.left_last}>
              © 2020 Your Company
              </div>
          </div>
          <div className={styles.right_div}>
              <div className={styles.right1}>
                  
                  <ul>
                  <li>product</li>
                      <li>Download</li>
                      <li>Pricing</li>
                      <li>Locations</li>
                      <li>Server</li>
                      <li>Countries</li>
                      <li>Blog</li>
                  </ul>
              </div>
              <div className={styles.right1}>
            
                  <ul>
                      <li>Engage</li>
                      <li>LaslesVPN ?</li>
                      <li>FAQ</li>
                      <li>Tutorials</li>
                      <li>About Us</li>
                      <li>Privacy Policy</li>
                      <li>Terms of Service</li>
                  </ul>
              </div>
              <div className={styles.right1}>
             
                  <ul>
                      <li>Earn Money</li>
                      <li>Affiliate</li>
                      <li>Become Partner</li>
                     
                  </ul>
              </div>
          </div>
          </div>
          <hr style={{width:"90%"}}/>
  
      </div>
  )
}

export default Footer