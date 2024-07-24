import React from "react";
import styles from "./page.module.css";

function page() {
  return (
    <>
      <section className={styles.top}>
        <div className="">Cyber Truck</div>
      </section>

      <section className={styles.toppara}>
        <div className="">
            <div className={styles.name}>
                Dear <span className={styles.thick}>CyberTruck</span> Admin,
            </div>
            <div className="">
            You have received a contact inquiry with the following details:
            </div>
        </div>
      </section>

      <section className={styles.tablesec}>
        <div className={styles.bookingDetails}>
        <table className={styles.detailsTable}>
          <thead>
          </thead>
          <tbody>
            <tr>
              <td className={styles.gapColumn}>Customer Name:</td>
              <td>Kevin David</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Email:</td>
              <td>kevindavid@example.com</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Phone No.:</td>
              <td>+1 (555) 123-4567</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Subject:</td>
              <td>For vehicle rent</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Message:</td>
              <td>Looking forward to renting a vehicle
              for business.</td>
            </tr>
            
          </tbody>
        </table>
        </div>
      </section>

      <section className={styles.bottompara}>
        <div className="">
        Please review the inquiry and take the necessary actions.
        </div><br />
        <div className="">
            Thank you,
        </div><br />
        <div className="">
            <span className={styles.success}>Team Cybertruckbr</span> <br />
            Tel: +1 555-123-4567 <br />
            Email : Cybertruckrent@gmail.com <br />
            Web : www.cybertruckrent.lk <br />
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.footertext}>
          <div className="">
           © 2024 Cyber Truck.All Rights Reserved. <br />
           Designed & Developed by <span className={styles.success}>Archmage Solutions.</span> 
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
