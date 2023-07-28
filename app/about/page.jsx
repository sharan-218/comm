import React from "react";
import styles from "./page.module.css";
import Acard from "@/components/acards/Acard";
const About = () => {
  return (
    <div className={styles.parent}>
      {/* --------------------------------------------------------- */}
      {/* left section  */}
      <div className={styles.lSection}>
        <section className={styles.tSection}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.sTitle} align="justify">
            Welcome to our vibrant online community! We are excited to present a
            platform where individuals aged 15 and above can connect, exchange
            ideas, and inspire each other to foster personal and intellectual
            growth.
          </p>
        </section>
        <section className={styles.aboutSection}>
          <h1 className={styles.title}>What is Comm.?</h1>
          <p className={styles.about1} align="justify">
            At our heart, we believe in the power of meaningful interactions.
            Our website serves as a hub for like-minded people to gather, share
            their thoughts, and engage in thought-provoking discussions. We
            provide a safe and inclusive space where diverse perspectives are
            not only encouraged but celebrated.
            <br />
            <br />
            Our vision is to cultivate a positive and uplifting environment,
            where individuals can find support, make new friends, and nurture
            their passions. Whether you are an artist seeking inspiration, a
            budding entrepreneur with innovative ideas, or simply someone
            looking to expand their horizons, our community welcomes you with
            open arms. Our commitment to excellence is evident in the
            meticulously curated content we offer. From articles that touch on
            various topics, empowering stories, to insightful discussions on
            current trends, our platform is a repository of knowledge and
            creativity.
            <br />
            <br />
            <span>
              Join us in this journey of exploration and discovery. Together, we
              will build bridges across cultures and continents, sparking change
              and leaving a lasting impact on each other's lives.
            </span>
          </p>
          <br />
          <p className={styles.p2} align="justify">
            "At our website, it's not just about creating a community; it's
            about creating a home for your aspirations, dreams, and aspirations
            to thrive. Together, let's embark on a transformative adventure and
            build a future where our collective wisdom shapes a better world.
            Welcome aboard!"
          </p>
        </section>
      </div>
      {/* -------------------------------------------------------------------------  */}
      {/* right section  */}

      <section className={styles.rightSection}>
        <Acard
          title="Any design?"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint."
        />
        <Acard
          title="Any design?"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint."
        />
        <Acard
          title="Any design?"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint."
        />
        <Acard
          title="Any design?"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint."
        />
        <Acard
          title="Any design?"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint."
        />
        <Acard
          title="Any design?"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint."
        />
        <Acard
          title="Any design?"
          about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sint."
        />
      </section>
    </div>
  );
};

export default About;
