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
                Dear David,
            </div>
            <div className="">
                Great news! Your booking with Cybertruck Vehicle <span className={styles.success}>has been successful. </span>  
                Here are your confirmed details:
            </div>
        </div>
      </section>

      <section className={styles.tablesec}>
        <div className={styles.bookingDetails}>
        <table className={styles.detailsTable}>
          <thead>
            <tr>
              <th className={styles.header} colSpan={2}>
                Booking Details
              </th>
            </tr>
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
              <td className={styles.gapColumn}>Company Name:</td>
              <td>ABC Corporation</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Street Address:</td>
              <td>123 Main Street</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>City:</td>
              <td>Anytown</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Postal Code:</td>
              <td>12345</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Country:</td>
              <td>United States</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Vehicle Name:</td>
              <td>Cybertruck</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>No. of PAX:</td>
              <td>4</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Rate Type:</td>
              <td>Standard</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Distance (KM):</td>
              <td>100</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Pickup Date & Time:</td>
              <td>05/15/2024 10:00 AM</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Pickup Location:</td>
              <td>Airport</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Return Date & Time:</td>
              <td>05/20/2024 5:00 PM</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Return Location:</td>
              <td>Downtown</td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>

      <section className={styles.bottompara}>
        <div className="">
        For any assistance, our customer service team is here to help. Contact
        us at <span className={styles.success}>+1 555-123-4567.</span> 
        </div><br />
        <div className="">
        We appreciate your trust in Cybertruck Vehicle and look forward to
        providing you with an amazing experience.
        </div><br />
        <div className={styles.g}>
        Best Regards,<br />
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
