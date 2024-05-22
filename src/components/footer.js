import styles from "../components/footer.module.css";

export default function Footer() {
  return (
    <main>
      <div className={styles.footer}>
        <a className={styles.learnMoreBtn} href="#intro">
          Learn More
        </a>
      </div>
    </main>
  );
}
