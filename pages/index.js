import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  const fetching = fetch(
    `https://api.foursquare.com/v2/venues/search?ll=41.705922751666556, 44.78714478305549&query=coffee stores&client_id=${process.env.FOURSQUARE_CLIENT_ID}&client_secret=${process.env.FOURSQUARE_CLIENT_SECRET}&v=20210525`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
  return {
    props: { coffeeStores: coffeeStoresData },
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
            height={400}
          />
        </div>
        {coffeeStoresData.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
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
          </>
        )}
      </main>
    </div>
  );
}
