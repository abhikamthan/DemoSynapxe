"use client";
import Link from 'next/link';
import styles from './style.module.scss';
import Toast from 'awesome-toast-component';
import { useRouter } from "next/navigation";


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
    );
  }
  
        