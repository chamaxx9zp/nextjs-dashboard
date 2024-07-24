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
            We regret to inform you that the booking inquiry you made on
            15/05/2024 <span className={styles.success}>has been canceled</span>  due to the payment delay.
            </div> <br />
            <div className="">
            If you have any further questions, please feel free to contact our
            customer service team at <span className={styles.success}>+1 555-123-4567.</span> 
            </div>
        </div>
      </section>

      <section className={styles.bottompara}>
        <div className="">
        Thank you for considering Cybertruck. We appreciate your
        understanding and hope to assist you in the future.
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
