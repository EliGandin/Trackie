import HomeNav from "./HomeNav";

const Home = () => {
  return (
    <main className="z-40 flex h-screen w-screen flex-col overflow-hidden bg-white">
      <HomeNav />

      <div className="relative bottom-12 top-8 w-full">
        <img className="blur-sm" src="/homepage-bg.jpg" alt="background" />

        <div>
          <div className="absolute top-10 z-20 h-96 ">
            <img
              className="ml-[-200px] mt-[-200px] w-screen"
              src="/trackie-no-bg.png"
              alt="logo"
            />
          </div>
          <div className="absolute top-0 z-0 h-56 w-screen bg-indigo-100 blur-3xl"></div>

          {/* <h1 className="absolute left-14 top-10 z-20 text-9xl text-stone-800">
            trackie
          </h1> */}
          <h1 className="absolute left-14 top-[350px] z-20 ml-3 text-4xl text-stone-900">
            The social media app to let you show off your travels, you Mr.
            Worldwide.
          </h1>
          <h2 className="absolute left-14 top-[425px] z-20 ml-3 text-4xl text-stone-800">
            Just click on the map, add your photos and tell your story
          </h2>
          <div className="absolute top-56 z-0 h-[280px] w-screen bg-indigo-100 blur-xl"></div>
        </div>
      </div>
      <footer className="fixed bottom-0 z-40 h-[32px] w-screen bg-stone-600" />
    </main>
  );
};

export default Home;
