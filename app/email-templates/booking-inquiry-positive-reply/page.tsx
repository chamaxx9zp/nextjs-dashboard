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
                Dear <span className={styles.thick}>David</span>,
            </div>
            <div className="">
            With respect to your recent booking inquiry, we are delighted to inform
            you that we are in a position to accommodate your booking per the
            below invoice details.
            </div> <br />
            <div className="">
            Please be aware that the booking is reserved for a period of 24 hours,
            after which the above link will no longer be valid for processing the
            booking.
            </div>
        </div>
      </section>

      <section className={styles.bottompara}>
        
        <div className="">
            Best Regards, <br /><br />
            <span className={styles.success}>Team Cybertruckbr</span> <br />
            Tel: +1 555-123-4567 <br />
            Email : Cybertruckrent@gmail.com <br />
            Web : www.cybertruckrent.lk <br />
        </div>
      </section>

      <section className={styles.invoice}>
      <div className={styles.invoiceSection}>
      <div className={styles.address}>
        <p>1234 Main Street,<br /> Anytown,<br /> USA</p>
      </div>
      <div className={styles.logo}>
        <img src="/path/to/logo.png" alt="Cyber Truck Logo" />
      </div>
      <div className={styles.invoiceInfo}>
        <p>Invoice ID:<strong> 1234</strong></p>
        <p>Issued Date: <strong> 05/15/2024</strong></p>
        <p>Due Date: <strong> 10/15/2014</strong></p>
        <p>Payment Status: <strong> Pending</strong></p>
      </div>
      <div className={styles.details}>

        <table className={styles.detailsTable}>
          <thead>
            <tr>
              <th colSpan={2}>Invoice Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Vehicle Name:</td>
              <td>Cybertruck</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>kevindavid@example.com</td>
            </tr>
            <tr>
              <td>Street:</td>
              <td>Main street</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>United States</td>
            </tr>
            <tr>
              <td>No. of PAX:</td>
              <td>4</td>
            </tr>
            <tr>
              <td>Rental Basis:</td>
              <td>Day</td>
            </tr>
            <tr>
              <td>Pickup Date & Time:</td>
              <td>05/15/2024 10:00 AM</td>
            </tr>
            <tr>
              <td>Pickup Location:</td>
              <td>Airport</td>
            </tr>
            <tr>
              <td>Return Date & Time:</td>
              <td>05/20/2024 5:00 PM</td>
            </tr>
            <tr>
              <td>Return Location:</td>
              <td>Downtown</td>
            </tr>
            <tr>
              <td>Rental Period:</td>
              <td>5 days</td>
            </tr>
            <tr>
              <td>Invoice Note:</td>
              <td>Lorem ipsum dolor sit consectetur adipiscing.</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      {/* //////////// */}
      <table className={styles.summaryTable}>
        <thead>
          <tr>
            <th>Vehicle Name</th>
            <th>Rate Type</th>
            <th>Description</th>
            <th>KM</th>
            <th>Per KM Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cybertruck</td>
            <td>Standard Rate</td>
            <td></td>
            <td>100</td>
            <td>1000</td>
            <td>100 000</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.totalAmount}>
        <p>Total Amount($): <strong>100 000</strong></p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.downloadButton}>Download</button>
        <button className={styles.payNowButton}>Pay Now</button>
      </div>
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
