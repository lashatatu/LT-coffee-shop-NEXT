import { useRouter } from 'next/router';

const CoffeeStore = () => {
  const router=useRouter()
  return (
    <div>
      <p>CoffeeStore</p>
    </div>
  );
};

export default CoffeeStore;