import HomeClient from './client.page';

export default async function Home() {

  return (
    <div className="flex flex-col flex-wrap items-center justify-center text-center mt-10 sm:mt-16">
      <h1 className="text-7xl sm:text-9xl font-extrabold bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-transparent drop-shadow-sm mb-8">
        Shorten Me!
      </h1>

      <span className="text-xl sm:text-2xl">Chopping links like a sushi chef...</span>

      <div className="flex items-center text-xl sm:text-2xl justify-center flex-wrap gap-1 mb-10">
        <span>Because</span>
        <span className="py-1 font-semibold italic text rounded text-rose-400">
          &quot;size does matter&quot;
        </span>
        <span className="text-2xl font-serif">;)</span>
      </div>

      <HomeClient />
    </div>
  );
}