import { useRouter } from "next/router";
import Link from "next/link";
import coffeeStoresData from "../../data/coffee-stores.json";

export function getStaticProps({ params }) {
  return {
    props: {
      coffeeStore: coffeeStoresData.find(
        (coffeeStore) => coffeeStore.id === params.id
      ),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: coffeeStoresData.map((coffeeStore) => ({
      params: { id: coffeeStore.id },
    })),
    fallback: false,
  };
}

const CoffeeStore = () => {
  const router = useRouter();
  return (
    <div>
      {router.query.id}{" "}
      <Link href="/">
        <a>Back To Home</a>
      </Link>
      <p>CoffeeStore</p>
    </div>
  );
};

export default CoffeeStore;
