import React from 'react'
import styles from '../styles/navbar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
function NavBar() {
  return (
    
    <section className={styles.topbar}>
        <div className={styles.udemy}>
            <a href="/#">
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" width="100px"/>
            </a>
        </div>
        <div className={styles.navContainer}>
            <nav>
                <a href="/#" className={styles.topbarlink+' '+ styles.categories}>
                    Cateogories
                </a>
                <button className={styles.categoriesTiles}>
                    <DensityMediumIcon style={{width:"30px"}}/>
                </button>
                <div className={styles.navbar}>
                    <ul className={styles.navbarul}>
                        <li className={styles.navlink}><button className={styles.topbarlink + ' ' +styles.tablinks}>Python</button></li>
                        <li className={styles.navlink}><button className={styles.topbarlink + ' ' +styles.tablinks}>Excel</button></li>
                        <li className={styles.navlink}><button className={styles.topbarlink + ' ' +styles.tablinks}>Web Development</button></li>
                        <li className={styles.navlink}><button className={styles.topbarlink + ' ' +styles.tablinks}>Javascript</button></li>
                        <li className={styles.navlink}><button className={styles.topbarlink + ' ' +styles.tablinks}>Data Science</button></li>
                        <li className={styles.navlink}><button className={styles.topbarlink + ' ' +styles.tablinks}>AWS Certification</button></li>
                        <li className={styles.navlink}><button className={styles.topbarlink + ' ' +styles.tablinks}>Drawing</button></li>
                    </ul>
                </div>
            </nav>
        </div>
        <form action="search" className={styles.searchform}>
            <input type="text" className={styles.searchbar} placeholder="Search for anything"/>
            <button type="submit" className={styles.submitbutton}>
                <SearchIcon className={styles.searchicon}style={{width:"20px"}}/>
            </button>
        </form>
        <div className={styles.teach}>
            <a href="/#" className={styles.topbarlink + ' '+styles.helpingLink}>Teach on Udemy</a>
        </div>
        <div className={styles.learning}><a href="/#" className={styles.topbarlink + ' '+styles.helpingLink}>My Learning</a></div>

        <div className={styles.topIcon}>
            <a href="/#" className={styles.topbarlink + ' '+ styles.iconRight +' '+styles.heart}><FavoriteBorderIcon style={{width:"20px"}}/></a>
            <a href="/#" className={styles.topbarlink + ' '+ styles.iconRight +' '+styles.cart}><ShoppingCartIcon style={{width:"20px"}}/></a>
            <a href="/#" className={styles.topbarlink + ' '+ styles.iconRight +' '+styles.bell}><NotificationsNoneIcon style={{width:"20px"}}/></a>
            <a href="/#" className={styles.topbarlink + ' '+ styles.iconRight +' '+styles.account}><div className={styles.userImg}>MA</div></a>
        </div>
    </section>
  )
}

export default NavBar