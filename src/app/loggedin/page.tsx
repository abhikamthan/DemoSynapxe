"use client"; 
import { useState } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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


      <div className={styles.alertBanner}>
        <h2>We need more O+ Blood type</h2>
        <p>Be a life-saver. Donate today and save lives tomorrow.</p><br></br>
        {/* <button className={styles.donateBtn}>Donate now</button> */}
        <Link href="/appoinment" className={styles.donateBtn}>Donate now</Link>
      </div>

      <div className={styles.profileSection}>
        <div className={styles.profileHeader}> 
        <div className={styles.profileInfo}>
          <h1>Hello, Cindy!</h1>
          <p>It looks like you are ready to donate blood.</p>
          <p>Check today's request.</p><br></br>
          {/* <button className={styles.requestBtn}>Donation request</button> */}
          <Link href="/appoinment" className={styles.requestBtn}>Donation request</Link>
        </div>
        <div className={styles.bloodIcon}>
          <Image src="/hand.svg" alt="Blood donation" width={100} height={100} />
        </div>
        </div>
        <div className={styles.userProfile}>
          <Image src="/Avatar.svg" alt="Profile" width={60} height={60} className={styles.profilePic} />
          <h3>Cindy Tan</h3>
          <p>25 years old</p>
          <p>Body Mass Index: 24.2</p>
          <p>Total donation: 7 times</p>
          <p>Last donation: 18 Nov 2023</p>
        </div>
      </div>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>18 Feb 2025</h3>
          <p>Next available donation date</p>
        </div>
        <div className={styles.statCard}>
          <h3>7 bags</h3>
          <p>Total donations</p>
        </div>
        <div className={styles.statCard}>
          <h3>O+</h3>
          <p>Your blood type</p>
        </div>
      </div>

      <div className={styles.impactMessage}>
        <h2>So far you have helped <span className={styles.highlight}>7 people</span> with your donations</h2>
      </div>

      <div className={styles.testimonials}>
        <div className={styles.testimonialCard}>
        <Image src="/quote.svg" alt="Quote" width={65} height={48} />
          <h3>I have a future</h3>
          <p>When I was younger, I had Acute Lymphoblastic Leukaemia and needed chemotherapy and blood transfusions regularly. Fortunately, after 3.5 years of treatment, my condition improved. I'm very thankful for the countless blood donors who saved my life. Because they were there for me yesterday, I am here today, working hard for a brighter tomorrow.</p>
          <span className={styles.testimonialAuthor}>Jonathan Bin Samat, Leukaemia patient</span>
        </div>
        <div className={styles.testimonialCard}>
        <Image src="/quote.svg" alt="Quote" width={65} height={48} />
          <h3>I survived!</h3>
          <p>My life literally crashed to a standstill when I met with a traffic accident in 2020. It broke numerous bones in my body, fractured my skull, blinded my left eye, tore off my left nostril and infected me with permanent amnesia. I lost 1/3 of my blood. If it wasn't for the multiple blood transfusions I received in the hours following my accident, I probably would have died.</p>
          <span className={styles.testimonialAuthor}>Hassan Tan, Traffic accident survivor</span>
        </div>
      </div>

      <div className={styles.callToAction}>
        <h2>Your <span className={styles.highlight}>O+ blood</span> is the missing piece to complete the puzzle of hope</h2>
      </div>

      <div className={styles.bloodbankSection}>
        <h2>Bloodbank near you</h2>
        <div className={styles.bloodbankGrid}>
          <div className={styles.bloodbankCard}>
            <Image src="/near1.svg" alt="Bloodbank @ Westgate Tower" width={300} height={200} />
            <h3>Bloodbank @ Westgate Tower</h3>
            <p>Westgate Tower (Landing East MRT Station, Exit D, walk through Westgate) 1 Gateway Drive #10-01 to 05 Singapore 608531</p>
            <p>Open until 8pm</p>
          </div>
          <div className={styles.bloodbankCard}>
            <Image src="/near2.svg" alt="Bloodbank @ Woodlands" width={300} height={200} />
            <h3>Bloodbank @ Woodlands</h3>
            <p>Woodlands Civic Centre (Opposite Causeway Point) 900 South Woodlands Drive #05-07 Singapore 730900</p>
            <p>Open until 8pm</p>
          </div>
        </div>
      </div>

      <div className={styles.eventsSection}>
        <div className={styles.sectionHeader}>
          <h2>Upcoming events</h2>
          <a href="#" className={styles.eventsLink}>Events</a>
        </div>
        <div className={styles.eventsGrid}>
          <div className={styles.eventCard}>
            <div className={styles.eventImage}>
              <Image src="/event1.svg" alt="Rotary Club event" width={300} height={200} />
            </div>
            <div className={styles.eventInfo}>
              <span className={styles.eventDate}>1 Feb 2025, Saturday</span>
              <h3>Blood donation with Rotary Club of Singapore</h3>
              <p>Singapore House</p>
              {/* <button className={styles.signupBtn}>Sign up now</button> */}
              <p className={styles.registeredCount}>56 people REGISTERED</p>
            </div>
          </div>
          <div className={styles.eventCard}>
            <div className={styles.eventImage}>
              <Image src="/event2.svg" alt="Woodlands CC event" width={300} height={200} />
            </div>
            <div className={styles.eventInfo}>
              <span className={styles.eventDate}>22 Feb 2025, Wednesday</span>
              <h3>Blood donation with Woodlands CC</h3>
              <p>Woodlands Community club</p>
              {/* <button className={styles.signupBtn}>Sign up now</button> */}
              <p className={styles.registeredCount}>88 people REGISTERED</p>
            </div>
          </div>
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