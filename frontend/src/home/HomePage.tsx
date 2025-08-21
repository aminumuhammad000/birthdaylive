import React from "react";
import styles from "./home.module.css";
import "./globals.css"

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>BirthdayLive</div>
        <div className={styles.navLinks}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#how-it-works" className={styles.navLink}>How it Works</a>
          <a href="#testimonials" className={styles.navLink}>Testimonials</a>
          <a href="#pricing" className={styles.navLink}>Pricing</a>
        </div>
        <button className={styles.navButton}>Get Started</button>
      </nav>

      {/* Hero Section */}
      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>
          Celebrate Birthdays Live, Anywhere 🎉
        </h1>
        <p className={styles.heroSubtitle}>
          Connect with family and friends, host live virtual parties, and make birthdays unforgettable.
        </p>
        <button className={styles.heroButton}>Start Your Free Party</button>
      </header>

      {/* Features */}
      <section id="features" className={styles.features}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Live Party Streaming</h3>
            <p>Host and join live video parties with friends and family anywhere in the world.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Birthday Countdown</h3>
            <p>Never miss a birthday again with our personalized countdown timers and reminders.</p>
          </div>
          <div className={styles.featureCard}>
            <h3 className={styles.featureTitle}>Gift Sharing</h3>
            <p>Send and receive digital gifts, surprises, and heartfelt messages in real-time.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className={styles.howItWorks}>
        <h2 className={styles.sectionTitle}>How It Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}><span>1</span><p>Create your BirthdayLive event in seconds.</p></div>
          <div className={styles.step}><span>2</span><p>Invite friends & family via a simple link.</p></div>
          <div className={styles.step}><span>3</span><p>Go live and celebrate together with games, music, and gifts.</p></div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={styles.testimonials}>
        <h2 className={styles.sectionTitle}>What People Say</h2>
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <p>"BirthdayLive made my daughter’s 10th birthday unforgettable, even though half the family lives abroad!"</p>
            <span>— Aisha M.</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>"We played games, sang songs, and opened gifts together. Felt just like being in the same room."</p>
            <span>— John D.</span>
          </div>
          <div className={styles.testimonialCard}>
            <p>"As a remote worker, I couldn’t travel home, but BirthdayLive gave me the closest thing possible."</p>
            <span>— Fatima K.</span>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={styles.pricing}>
        <h2 className={styles.sectionTitle}>Pricing</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Free</h3>
            <p>Basic party hosting and countdown features.</p>
            <span className={styles.price}>$0</span>
            <button className={styles.primaryButton}>Get Started</button>
          </div>
          <div className={`${styles.pricingCard} ${styles.highlight}`}>
            <h3>Premium</h3>
            <p>Unlimited guests, digital gifts, and HD live streaming.</p>
            <span className={styles.price}>$4.99</span>
            <button className={styles.secondaryButton}>Go Premium</button>
          </div>
          <div className={styles.pricingCard}>
            <h3>Enterprise</h3>
            <p>Custom birthday packages for organizations and schools.</p>
            <span className={styles.price}>Contact Us</span>
            <button className={styles.primaryButton}>Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} BirthdayLive. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
