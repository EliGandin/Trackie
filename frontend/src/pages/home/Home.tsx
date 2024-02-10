import HomeNav from "./HomeNav";

const Home = () => {
  return (
    <main className="z-40 flex h-screen w-screen flex-col overflow-hidden bg-white">
      <HomeNav />

      <div className="relative bottom-12 top-8 w-full">
        <img className="blur-sm" src="/homepage-bg.jpg" alt="background" />

        <div>
          <div className="absolute top-0 z-20 h-96">
            <img
              className="w-screen lg:ml-[-160px] lg:mt-[-125px] xl:ml-[-200px] xl:mt-[-150px] 2xl:ml-[-250px] 2xl:mt-[-250px]"
              src="/trackie-no-bg.png"
              alt="logo"
            />
          </div>

          <h1
            className="xl-py-2 xl:text-2 xl absolute z-20 rounded-lg border border-sky-600 border-opacity-5 px-1 py-2 font-semibold text-stone-900 backdrop-blur-sm lg:left-[175px] lg:top-[250px] lg:text-2xl xl:left-[250px]
          xl:top-[350px] xl:text-3xl 2xl:left-[300px] 2xl:top-[450px] 2xl:text-4xl"
          >
            The social media app to let you show off your travels, you Mr.
            Worldwide.
          </h1>

          <h2 className="absolute z-20 rounded-lg border border-sky-600 border-opacity-5 px-1 py-2 font-semibold text-stone-900 lg:left-[350px] lg:top-[300px] lg:text-2xl xl:left-[450px] xl:top-[450px] xl:text-4xl xl:font-normal 2xl:left-[850px] 2xl:top-[525px] 2xl:text-4xl">
            Just click on the map, add your photos and tell your story.
          </h2>
        </div>
      </div>
      <footer className="fixed bottom-0 z-40 h-[32px] w-screen bg-stone-600" />
    </main>
  );
};

export default Home;
