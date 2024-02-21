import AnimeList from "@/components/organism/AnimeList";

const Dashboard = () => {
  return (
    <>
      <section className="container border px-3 md:px-0 flex flex-col items-center">
        <AnimeList />
      </section>
    </>
  );
};

export default Dashboard;
