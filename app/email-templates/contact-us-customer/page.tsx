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
                Thank you for reaching out to Cybertruck. This is to confirm that we
                have received your message, and our team will get back to you as soon
                as possible. 
            </div> <br />
            <div className="">
            If your inquiry is urgent or requires immediate assistance, feel free to
            contact our customer support at <span className={styles.success}> +1 555-123-4567.</span>
            </div>
        </div>
      </section>

      <section className={styles.bottompara}>
        <div className="">
        We appreciate your patience and look forward to assisting you.
        </div><br />
        <div className="">
            Best Regards, <br /><br />
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
