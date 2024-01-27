import HomeNav from "./HomeNav";

const Home = () => {
  return (
    <main className="z-40 flex h-screen w-screen flex-col overflow-hidden bg-white">
      <HomeNav />
      <div className="relative bottom-12 top-8 w-full">
        <img className="z-10 blur-sm" src="/homepage-bg.jpg" alt="background" />

        <div>
          <img
            className="absolute top-10 z-20"
            src="/logo-no-background.png"
            alt="logo"
          />
          {/* <h1 className="absolute left-14 top-10 z-20 text-9xl text-stone-800">
            trackie
          </h1> */}
          <h2 className="font- absolute left-14 top-52  z-20 text-4xl text-stone-800">
            The social media app to let you show off your travels, you Mr.
            Worldwide
          </h2>
        </div>
      </div>
      <footer className="fixed bottom-0 z-40 h-[32px] w-screen bg-stone-600" />
    </main>
  );
};

export default Home;
