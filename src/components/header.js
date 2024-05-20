import styles from "../components/header.css";

export default function Header() {
  return (
    <main>
      <nav className="header">
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
