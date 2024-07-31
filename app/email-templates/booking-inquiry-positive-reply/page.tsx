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
            With respect to your recent booking inquiry, we are delighted to
            inform you that we are in a position to accommodate your booking per
            the below invoice details.
          </div>{" "}
          <br />
          <div className="">
            Please be aware that the booking is reserved for a period of 24
            hours, after which the above link will no longer be valid for
            processing the booking.
          </div>
        </div>
      </section>

      <section className={styles.bottompara}>
        <div className="">
          Best Regards, <br />
          <br />
          <span className={styles.success}>Team Cybertruckbr</span> <br />
          Tel: +1 555-123-4567 <br />
          Email : Cybertruckrent@gmail.com <br />
          Web : www.cybertruckrent.lk <br />
        </div>
      </section>

      <section className={styles.invoice}>
        <div className={styles.invoiceSection}>
          <div className={styles.invoiceTop}>
            <div className={styles.address}>
              <p>
                1234 Main Street,
                <br /> Anytown,
                <br /> USA
              </p>
            </div>
            <div className={styles.logo}>
              <img src="/path/to/logo.png" alt="Cyber Truck Logo" />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.columnWide}>

            <div className={styles.tablesec}>
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

            </div>

            <div className={styles.columnNarrow}>
              <div className={styles.invoiceInfo}>
                <p>
                  Invoice ID:<strong> 1234</strong>
                </p>
                <p>
                  Issued Date: <strong> 05/15/2024</strong>
                </p>
                <p>
                  Due Date: <strong> 10/15/2014</strong>
                </p>
                <p>
                  Payment Status: <strong> Pending</strong>
                </p>
              </div>
            </div>
          </div>

         

          {/* //////////// */}
          

          <div className={styles.summarysection}>
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
              <p>
                Total Amount($): <strong>100 000</strong>
              </p>
            </div>

            <div className={styles.buttons}>
              <button className={styles.downloadButton}>Download</button>
              <button className={styles.payNowButton}>Pay Now</button>
            </div>
          </div>

          
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.footertext}>
          <div className="">
            © 2024 Cyber Truck.All Rights Reserved. <br />
            Designed & Developed by{" "}
            <span className={styles.success}>Archmage Solutions.</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
