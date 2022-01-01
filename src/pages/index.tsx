import { getOptionsForVote } from '@/utils/getRandomPokemon';
import { trpc } from '@/utils/trpc';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [firstId, secondId] = getOptionsForVote();
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1>Which Pokemon is Rounder?</h1>
      <div className="w-80 flex items-center justify-center border p-8 mt-2">
        <div className="bg-red-400 p-8">{firstId}</div>
        <p className="mx-8">vs</p>
        <div className="bg-red-400 p-8">{secondId}</div>
      </div>
    </div>
  );
};

export default Home;
