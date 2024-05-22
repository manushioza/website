import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <div className={styles.intro}>
        <a>Hi, I'm Manushi! 😃</a>
        <p>Software Engineer based in Toronto 📍</p>
      </div>
      <Footer></Footer>
    </main>
  );
}
