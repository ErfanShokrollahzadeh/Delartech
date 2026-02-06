import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerCol}>
          <h3>DelarTech</h3>
          <p>
            Empowering businesses through innovative technology solutions and
            digital transformation.
          </p>
          <div className={styles.socialLinks}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className={styles.footerCol}>
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Services</h4>
          <ul>
            <li>
              <Link href="/services/web-development">Web Development</Link>
            </li>
            <li>
              <Link href="/services/mobile-apps">Mobile Apps</Link>
            </li>
            <li>
              <Link href="/services/cloud-solutions">Cloud Solutions</Link>
            </li>
            <li>
              <Link href="/services/consulting">IT Consulting</Link>
            </li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <i className="fas fa-envelope"></i> contact@delartech.com
            </li>
            <li>
              <i className="fas fa-phone"></i> +1 (555) 123-4567
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> San Francisco, CA
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} DelarTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
