import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../Components/Banner";

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("clicked on button");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Coffee Connoisseur Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={"View Store nearby"}
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
