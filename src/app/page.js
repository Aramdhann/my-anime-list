import AnimeList from "@/components/templates/AnimeList";
import Header from "@/components/templates/AnimeList/Header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const topAnime = await response.json();

  return (
    <>
      <section className="flex flex-col items-center">
        <Header
          title={"Popular Anime"}
          linkHref={"/popular"}
          linkTitle={"see all"}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
};

export default Home;
