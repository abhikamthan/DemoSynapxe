"use client"; 
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './style.module.scss';
import { useState } from 'react';

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <section className="sectionSpace">
            <div className={styles.container}>
                <Head>
                    <title>LifeLink.SG - Make a lasting legacy</title>
                    <meta name="description" content="Singapore Blood Donation Community" />
                </Head>

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
                            <Link href="/">Why give blood</Link>
                            <Link href="/appoinment">Who can give blood</Link>
                            <Link href="/">The donation process</Link>
                            <Link href="/">Where to donate</Link>
                            <Link href="/">About us</Link>
                            <Link href="/loggedin" className={styles.loginBtn}>Sign up/Login</Link>
                        </nav>
                    </div>
                </header>

                <main>
                    {/* Hero Section */}
                    <section className={styles.hero}>
                        <div className={styles.heroContent}>
                            <div className={styles.heroLeft}>
                                <div className={styles.dropletContainer}>
                                    <Image
                                        src="/Vector.png" // Save the droplet logo image
                                        alt="Blood droplet logo"
                                        width={48}
                                        height={48}
                                        className={styles.dropletLogo}
                                    />
                                </div>
                                <h1>
                                    Make a <span className={styles.red}>lasting</span> legacy
                                </h1>
                                <p>It's often the smallest threads that weave the most profound stories. We invite you to discover the extraordinary power hidden within the simplicity of everday acts .</p>
                                {/* <button className={styles.redBtn}>Donate Now</button> */}
                                <Link href="/appoinment" className={styles.redBtn}>Donate Now</Link>
                            </div>
                            <div className={styles.heroRight}>
                                <div className={styles.imageContainer}>
                                    <Image
                                        src="/legacy1.svg"
                                        alt="Blood donor smiling"
                                        layout="responsive"
                                        width={500}
                                        height={500}
                                        className={styles.heroImage}
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mission Section */}
                    <section className={styles.mission}>
                        <p style={{ fontSize: '2rem' }}>Our mission is to bring together a community so we can find and maintain Singapore's blood supply in the movement to save lives.</p>
                    </section>

                    {/* Insights Section */}
                    <section className={styles.insights}>
                        <div className={styles.sectionHeader}>
                            <h2>Insights and Impact</h2>
                            <button className={styles.rightArrow}>→</button>
                        </div>
                        <div className={styles.insightCards}>
                            <div className={styles.card}>
                                <Image
                                    src="/caro1.svg" // Replace with actual image
                                    alt="Personal stories from recipients"
                                    width={527}
                                    height={323}
                                    objectFit="cover"
                                />
                                <h3>The human side of blood donation: Personal stories from recipients</h3>
                                <small>07 Jan 2025</small>
                            </div>
                            <div className={styles.card}>
                                <Image
                                    src="/caro2.svg" // Replace with actual image
                                    alt="Emergency preparedness"
                                    width={527}
                                    height={323}
                                    objectFit="cover"
                                />
                                <h3>Emergency preparedness: Blood reserves and disasters response</h3>
                                <small>28 Dec 2024</small>
                            </div>
                            <div className={styles.card}>
                                <Image
                                    src="/Location1.png" // Replace with actual image
                                    alt="Blood products"
                                    width={527}
                                    height={323}
                                    objectFit="cover"
                                />
                                <h3>Blood products: How does it help patients with unique needs</h3>
                                <small>04 Dec 2024</small>
                                {/* <div className={styles.cardIcons}>
                                    <span className={styles.redDot}></span>
                                    <span className={styles.sunIcon}></span>
                                </div> */}
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className={styles.stats}>
                        <h2 className={styles.redText}>
                            Every hour of the day, 15 unit of bloods are used in Singapore...
                            <span>your donation could be the one that saves a life.</span>
                        </h2>
                        <div className={styles.statsGrid}>
                            <div className={styles.statItem}>
                                <h3>90</h3>
                                <p>units</p>
                                <small>are collected every 3 hours</small>
                            </div>
                            <div className={styles.statItem}>
                                <h3>360</h3>
                                <p>units</p>
                                <small>are needed daily</small>
                            </div>
                            <div className={styles.statItem}>
                                <h3>14,000</h3>
                                <p>patients</p>
                                <small>receive blood products and blood-derived treatment</small>
                            </div>
                        </div>
                    </section>

                    <section className={styles.bloodTypes}>
                        <h2>Give blood. Save lives.</h2>
                        <p>Blood is needed to save lives in times of emergencies and to sustain the lives of those with medical conditions, like leukemia, thalassemia and bleeding disorders, as well as patients who are undergoing major surgeries. For many patients, blood donors are their lifeline. One unit of blood can save three lives!</p>

                        {/* Desktop Image */}
                        <div className={styles.desktopImage}>
                            <Image
                                src="/bloodbank1.svg"
                                alt="Blood products"
                                width={1000}
                                height={700}
                                objectFit="cover"
                            />
                        </div>

                        {/* Mobile Images */}
                        <div className={styles.mobileImages}>
                            <Image
                                src="/blood1.svg"
                                alt="Blood products 1"
                                width={300}
                                height={100}
                            />
                            <Image
                                src="/blood2.svg"
                                alt="Blood products 2"
                                width={300}
                                height={100}
                            />
                            <Image
                                src="/blood3.svg"
                                alt="Blood products 3"
                                width={300}
                                height={100}
                            />
                            <Image
                                src="/blood4.svg"
                                alt="Blood products 3"
                                width={300}
                                height={100}
                            />
                        </div>

                        <div className={styles.bloodButtons}>
                            <Link href="/appoinment" className={styles.redBtn}>Donate Now</Link>
                            <Link href="/appoinment" className={styles.outlineBtn}>Where to donate?</Link>
                            {/* <button className={styles.outlineBtn}>Where to donate?</button> */}
                        </div>
                    </section>

                    {/* Usage Stats Section */}
                    <section className={styles.usageStats}>
                        <h2>Where has the collected blood been used?</h2>
                        <div className={styles.usageGrid}>
                            <div className={styles.usageItem}>
                                <h3>54<span>%</span></h3>
                                <p>General surgery</p>
                            </div>
                            <div className={styles.usageItem}>
                                <h3>31<span>%</span></h3>
                                <p>General medicine</p>
                            </div>
                            <div className={styles.usageItem}>
                                <h3>9<span>%</span></h3>
                                <p>Haematology</p>
                            </div>
                            <div className={styles.usageItem}>
                                <h3>6<span>%</span></h3>
                                <p>Accidents and emergencies</p>
                            </div>
                        </div>
                    </section>

                    {/* Locations Section */}
                    <section className={styles.locations}>
                        <div className={styles.sectionHeader}>
                            <h2>Locations</h2>
                            <button className={styles.rightArrow}>→</button>
                        </div>
                        <div className={styles.locationCards}>
                            <div className={styles.locationCard}>
                                <Image
                                    src="/Location1.png" // Replace with actual image
                                    alt="Bloodbank @ HSA"
                                    width={527}
                                    height={200}
                                    objectFit="cover"
                                />
                                <h3>Bloodbank @ HSA</h3>
                                <p>Health Sciences Authority (Opposite Outram Park MRT Station) 11 Outram Road Singapore 169078</p>
                            </div>
                            <div className={styles.locationCard}>
                                <Image
                                    src="/Location2.png" // Replace with actual image
                                    alt="Bloodbank @ Dhoby Ghaut"
                                    width={527}
                                    height={200}
                                    objectFit="cover"
                                />
                                <h3>Bloodbank @ Dhoby Ghaut</h3>
                                <p>Dhoby Ghaut MRT Station, Dhoby Xchange (Near Exit B), 11 Orchard Road, #B1-01 to #B1-09, Singapore 238826</p>
                            </div>
                            <div className={styles.locationCard}>
                                <Image
                                    src="/Location3.png" // Replace with actual image
                                    alt="Bloodbank @ Woodlands"
                                    width={527}
                                    height={200}
                                    objectFit="cover"
                                />
                                <h3>Bloodbank @ Woodlands</h3>
                                <p>Woodlands Civic Centre (Opposite Causeway Point) 900 South Woodlands Drive #05-07 Singapore 730900</p>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className={styles.cta}>
                        <h2>Donate blood, save lives.</h2>
                        <p>Your contribution matters and donating blood is easier than you think!</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/appoinment" className={styles.redBtn}>Donate Now</Link>
                            {/* <button className={styles.outlineBtn}>Find out more</button> */}
                            <Link href="/appoinment" className={styles.outlineBtn}>Find out more</Link>
                        </div>
                    </section>
                </main>

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
        </section>
    );
}