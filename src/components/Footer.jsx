import React from "react";
import styles from "../styles/footer.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import { Link } from "react-router-dom";
function Footer() {
  const partnersLogos = [
    "https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/box-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/netapp-light.svg",
    "https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg",
  ];
  return (
    <footer>
      <div className={styles.footer1}>
        <div className={styles.topCompanies}>
          Top companies choose Udemy Business to build in-demand career skills.
        </div>
        <div>
          {partnersLogos.map((logo, index) => {
            return (
              <img
                src={logo}
                alt="logo"
                key={index}
                className={styles.partnerImg}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.footer2}>
        <div className={styles.footerNav}>
          <div className={styles.footerLanguage}>
            <button className={styles.languageButton}>
              <span>
                <LanguageIcon />
              </span>
              <span>English</span>
            </button>
          </div>
          <ul className={styles.linkBottom}>
            <li>Udemy Buisness</li>
            <li>Teach on Udemy</li>
            <li>Get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul className={styles.linkBottom}>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>Investors</li>
          </ul>
          <ul className={styles.linkBottom}>
            <li>Terms</li>
            <li>Privacy Policy</li>
            <li>Cookie settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
        </div>
        <div>
          <Link to="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              style={{
                width: "91.07142857142857px",
                padding: "6.4rem 0 3.2rem",
              }}
              alt=""
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
