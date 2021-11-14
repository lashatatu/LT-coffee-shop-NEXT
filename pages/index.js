import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import coffeeStores from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: { coffeeStores },
  };
}

export default function Home(props) {
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
        <div className={styles.heroImage}>
          {" "}
          <Image
            src={"/static/Coffee-shop-pana.png"}
            width={700}
            height={700}
          />
        </div>
        <div className={styles.cardLayout}>
          {props.coffeeStores.map((coffeeStore) => (
            <Card
              key={coffeeStore.id}
              name={coffeeStore.name}
              imgUrl={coffeeStore.imgUrl}
              href={`/coffee-store/${coffeeStore.id}`}
              className={styles.card}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
