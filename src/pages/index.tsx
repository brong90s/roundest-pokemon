import { getOptionsForVote } from '@/utils/getRandomPokemon';
import { trpc } from '@/utils/trpc';
import type { NextPage } from 'next';
import { useState } from 'react';

const Home: NextPage = () => {
  // useState : run on both client and server, so the server has different default value than the client does
  const [ids, updateIds] = useState(() => getOptionsForVote());

  const [first, second] = ids;

  const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: first }]);
  const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: second }]);

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <h1>Which Pokemon is Rounder?</h1>
      <div className="flex items-center justify-center border p-8 mt-2">
        <div className="w-48 h-48 bg-red-400">
          <img src={firstPokemon.data?.sprites.front_default} alt="first-pokemon" className="w-full" />
          <div className="text-xl text-center">{firstPokemon.data?.name}</div>
        </div>
        <p className="mx-8">vs</p>
        <div className="w-48 h-48 bg-red-400">
          <img src={secondPokemon.data?.sprites.front_default} alt="second-pokemon" className="w-full" />
          <div className="text-xl text-center">{secondPokemon.data?.name}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
