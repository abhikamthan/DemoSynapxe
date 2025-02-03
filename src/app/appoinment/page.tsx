"use client";
import Link from 'next/link';
import styles from './style.module.scss';
import Image from 'next/image';
import Toast from 'awesome-toast-component';
import { useRouter } from "next/navigation";
import { useState } from 'react';


export default function AppointmentPage() {

  // const toast = () => {
  //   new Toast(`Appointment added`, {
  //     style: {
  //         container: [
  //             ['background-color', 'green']
  //         ],
  //         message: [
  //             ['color', '#FFF'],
  //         ]
  //     }
  //   });
  // }
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
   // e.preventDefault(); // Prevent default navigation
    new Toast(`Appointment added`, {
      style: {
          container: [
            ['background-color', 'green'],
          ],
          message: [
              ['color', '#FFF'],
          ]
      }
    });
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };
    return (
      <div className={styles.container}>
      <header className={styles.header} >
      <div className={styles.headerContent}>
          <div className={styles.logo}>
              {/* Replace with actual logo */}
              <Image
                  src="/SGLogo.svg" // Save the first image as lifelink-logo.png
                  alt="LifeLink.SG"
                  width={120}
                  height={30}
                  className={styles.logo}
              />
          </div>
          <button
              className={styles.menuToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
              ☰
          </button>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
              <Link href="/">Home</Link>
              <Link href="/loggedin">Account Home</Link>
              <Link href="/appoinment">Make an appointment</Link>
              <Link href="/loggedin">Appointment history</Link>
              <Link href="/loggedin">Resources</Link>
              <Link href="/loggedin">About You</Link>
              <Link href="/" className={styles.loginBtn}>Sign out</Link>
          </nav>
      </div>
  </header>
      <div>
        <h2 className={styles.heading}>Book an appointment</h2>
  
        <div className={`${styles.description}`}>
          To avoid making a wasted trip, you should check if you can donate blood before making an appointment. Please continue to practice social responsibility. Postpone your donation and do not visit the Bloodbanks and mobile blood drives if you are feeling unwell.
        </div>
  
        <div className={styles.block}>
          <p>Before making an appointment, please review and confirm your basic eligibility status below: </p>
          <ul className={styles.list}>          
            <li className={styles.listItem}>
              <input type="checkbox" id="item1" defaultChecked />
              <label htmlFor="item1">I am between 16 to 60 year old</label>
            </li>
            <li className={styles.listItem}>
              <input type="checkbox" id="item2" defaultChecked />
              <label htmlFor="item2">I weigh more than 45 kg</label>
            </li>
            <li className={styles.listItem}>
              <input type="checkbox" id="item3" defaultChecked />
              <label htmlFor="item3">I have not travelled outside of Singapore for the last 12 months</label>
            </li>
            <li className={styles.listItem}>
              <input type="checkbox" id="item4" defaultChecked />
              <label htmlFor="item4">I have not had a tattoo, piercing or acupuncture in the last 3 months</label>
            </li>
            <li className={styles.listItem}>
              <input type="checkbox" id="item5" defaultChecked />
              <label htmlFor="item5">I have not had any medical conditions, illness, surgery or medical procedure done in the last 12 months</label>
            </li>
            <li className={styles.listItem}>
              <input type="checkbox" id="item6" defaultChecked />
              <label htmlFor="item6">I am not pregnant, have not recently been pregnant or given birth in the last six months </label>
            </li>
            <li className={styles.listItem}>
              <input type="checkbox" id="item7" defaultChecked />
              <label htmlFor="item7">I am not taking prescription medication(s).</label>
            </li>
          </ul>
        {/* //  <input type="button" className={styles.continueBtn} value="Continue" /> */}
        <Link href="/" onClick={handleClick} className={styles.continueBtn}>Continue</Link>
        </div>
      </div>
      <footer className={styles.footer}>
                    <div className={styles.footer_inner}>
                        <div className={styles.borderTop}></div>
                        <div className={styles.content}>
                            <div className={styles.mainInfo}>
                                <div className={styles.brand}>LifeLink.SG</div>
                                <div className={styles.phone}>You can call us on: 6000 8888</div>
                            </div>
                            <div className={styles.topLinks}>
                                <a href="/contact">Contact</a>
                                <a href="/feedback">Feedback</a>
                            </div>
                        </div>
                        <div className={styles.links}>
                            <a href="/report">Report Vulnerability </a>
                            <a href="/privacy">Privacy Statement</a>
                            <a href="/terms">Terms of use</a>
                        </div>
                        <div className={styles.copyright}>© 2025 LifeLink.SG</div>
                    </div>
                </footer>
      </div>
    );
  }
  
        