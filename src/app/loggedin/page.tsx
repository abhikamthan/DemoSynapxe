"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

const BloodDonorDashboard = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className={styles.container}>
            {/* Top Menu */}
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
                        <button className={styles.loginBtn}>Sign out</button>
                    </nav>
                </div>
            </header>

            {/* Alert Card */}
            <div className={styles.fullWidthCard}>
                <div className={styles.headerRed}>We need more O+ Blood type</div>
                <p>Be a life saver. Donate today and save lives tomorrow. Here are the bloodbanks near you</p>
                <button className={styles.buttonRed}>Sign up now</button>
            </div>

            {/* Main Cards */}
            <div className={styles.cardsContainer}>
                <div className={styles.card} style={{ flex: 7 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ width: '66%', paddingRight: '20px' }}>
                            <div className={styles.headerBlack}>
                                <span className={styles.headerBlue}>Hello, </span>
                                Cindy!
                            </div>
                            <div className={styles.description}>
                                It looks like you are ready to donate blood. Check today's request.
                            </div>
                            <button className={styles.btnBlack}>Donation request</button>
                        </div>
                        <div>
                            <Image
                                src="/hand.svg"
                                alt="Blood Drop"
                                width={275}
                                height={275}
                                style={{ borderRadius: '50%' }}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.card} style={{ flex: 3 }}>
                    <div className={styles.profileSection}>
                        <Image
                            src="/Avatar.svg"
                            alt="Profile"
                            width={96}
                            height={96}
                            style={{ marginRight: '20px' }}
                        />
                        <div className={styles.cardHeading}>Cindy Tan</div>
                    </div>
                    <div>
                        <div className={styles.cardText}>Body Mass Index: 24.2</div>
                        <div className={styles.cardText}>Total Donation: 7 times</div>
                        <div className={styles.cardText}>Last Donation: 18 Nov 2023</div>
                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.donationHeader}>18 Jan 2024</div>
                    <p className={styles.donationHighlight}>Next available donation date</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.donationHeader}>
                        7 <span className={styles.donationFaded}>bags</span>
                    </div>
                    <p className={styles.donationHighlight}>Total Donation</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.donationHeader}>
                        O <span className={styles.donationFaded}>+</span>
                    </div>
                    <p className={styles.donationHighlight}>Blood Type</p>
                </div>
            </div>

            {/* Impact Card */}
            <div className={styles.cardsContainer}>
                <div className={styles.card} style={{ width: '100%' }}>
                    <div className={styles.donationHeader} style={{ width: '65%' }}>
                        So far you have helped{' '}
                        <span style={{ color: 'red', fontWeight: 'bold' }}>7 people</span> with
                        your donations.
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className={styles.cardsContainer}>
                <div className={styles.card} style={{ width: '50%', padding: '48px' }}>
                    <Image src="/quote.svg" alt="Quote" width={65} height={48} />
                    <div className={styles.cardHeading}>I have a future</div>
                    <p className={styles.cardText}>
                        When I was younger, I had Acute Lymphoblastic Leukaemia and needed
                        chemotherapy and blood transfusions regularly. Fortunately, after 3.5
                        years of treatment, my condition improved. I'm very thankful for the
                        countless blood donors who saved my life. Because they were there for
                        me yesterday, I am here today, working hard for a brighter tomorrow.
                    </p>
                </div>

                <div className={styles.card} style={{ width: '50%', padding: '48px' }}>
                    <Image src="/quote.svg" alt="Quote" width={65} height={48} />
                    <div className={styles.cardHeading}>I survived!</div>
                    <p className={styles.cardText}>
                        My life literally crashed to a standstill when I met with a traffic
                        accident in 2020. It broke numerous bones in my body, fractured my
                        skull, blinded my left eye, tore off my left nostril, and inflicted me
                        with permanent amnesia. I lost 1/3 of my blood. If it weren't for the
                        multiple blood transfusions I received in the hours following my
                        accident, I probably would have died.
                    </p>
                </div>
            </div>

            {/* Motivation Card */}
            <div className={styles.cardsContainer}>
                <div className={styles.card} style={{ width: '100%' }}>
                    <div className={styles.donationHeader}>
                        Your{' '}
                        <span style={{ color: 'red', fontWeight: 'bold' }}>O+ blood</span> is
                        the missing piece to complete the puzzle of hope.
                    </div>
                </div>
            </div>

            {/* Blood Banks Section */}
            <div className={styles.cardsContainer}>
                <div className={styles.card} style={{ width: '100%' }}>
                    <div>
                        <div className={styles.headerRed}>We need more O+ blood type.</div>
                        <p className={styles.cardText} style={{ width: '40%' }}>
                            Be a life saver. Donate today and save lives tomorrow. Here are the
                            bloodbanks near you
                        </p>
                        <button className={styles.buttonRed}>Donate now</button>
                    </div>

                    <div
                        className={styles.donationHighlight}
                        style={{ color: 'black', marginTop: '40px' }}
                    >
                        Bloodbank near you
                    </div>
                  

                    <div className={styles.cardsContainer} style={{ padding: 0, marginLeft: 0 }}>
                        <div className={styles.bloodbankCard}>
                            <Image
                                src="/near1.svg"
                                alt="Bloodbank 1"
                                width={496}
                                height={240}
                                className={styles.bloodbankImage}
                            />
                            <div className={styles.bloodbankInfo}>
                                <div className={styles.headerSmall}>Bloodbank @ Westgate Tower</div>
                                <div className={styles.textFaded}>
                                    Westgate Tower (Jurong East MRT Station, Exit D, walk through
                                    Westgate) 1, Gateway Drive #10-01 to 05 Singapore 608531
                                    <p>Open until 8pm</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.bloodbankCard}>
                            <Image
                                src="/near2.svg"
                                alt="Bloodbank 2"
                                width={496}
                                height={240}
                                className={styles.bloodbankImage}
                            />
                            <div className={styles.bloodbankInfo}>
                                <div className={styles.headerSmall}>Bloodbank @ Woodlands</div>
                                <div className={styles.textFaded}>
                                    Woodlands Civic Center (Opposite Causeway Point) 900 South
                                    Woodlands Drive #05-07 Singapore 730900
                                    <p>Open until 8pm</p>
                                </div>
                            </div>
                        </div>
                    </div>                  

                </div>
            </div>
        </div>
    );
};

export default BloodDonorDashboard;
