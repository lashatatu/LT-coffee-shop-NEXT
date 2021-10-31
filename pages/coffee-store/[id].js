import { useRouter } from "next/router";
import Link from "next/link";

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