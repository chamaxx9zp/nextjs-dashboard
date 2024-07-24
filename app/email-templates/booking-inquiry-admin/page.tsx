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
            We have received a booking inquiry with the following details:
            </div>
        </div>
      </section>

      <section className={styles.tablesec}>
        <div className={styles.bookingDetails}>
        <table className={styles.detailsTable}>
          <thead>
            <tr>
              <th className={styles.header} colSpan={2}>
                Booking Summary
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
            <tr>
              <td className={styles.gapColumn}>Rental Period:</td>
              <td>5 days</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Rental Basis:</td>
              <td>Day</td>
            </tr>
            <tr>
              <td className={styles.gapColumn}>Message :</td>
              <td>Looking forward to renting a vehicle
              for business.</td>
            </tr>
          </tbody>
        </table>
        </div>
      </section>

      <section className={styles.bottompara}>
        <div className="">
        Kindly review this inquiry and take the necessary actions.
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
