import { trpc } from '@/utils/trpc';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(['hello', { text: 'iBrong' }]);

  if (isLoading) return <div>Loading...</div>;

  if (data) return <div>{data.greeting}</div>;

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1>Which Pokemon is Rounder?</h1>
      <div className="w-80 flex items-center justify-center border p-8 mt-2">
        <div className="bg-red-200 p-8"></div>
        <p className="mx-8">vs</p>
        <div className="bg-red-200 p-8"></div>
      </div>
    </div>
  );
};

export default Home;
