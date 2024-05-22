import styles from "../components/header.module.css";

export default function Header() {
  return (
    <main>
      <nav className={styles.header}>
        <a className={styles.links} href="#intro">
          About me
        </a>
        <a className={styles.links} href="#work">
          Work
        </a>
        <a className={styles.links} href="#discover">
          Discover
        </a>
        <a className={styles.links} href="#connect">
          Connect
        </a>
      </nav>
    </main>
  );
}
