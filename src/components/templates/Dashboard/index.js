import Card from "@/components/molecules/Card";
import Header from "@/components/molecules/Card/Header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();

  return (
    <>
      <section className="container px-3 md:px-0 flex flex-col items-center">
        <div className="w-full">
          <Header titleList={"Popular Anime"} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {anime.data.map((data) => {
            return (
              <div key={data.mal_id}>
                <Card
                  title={data.title}
                  alt={data.title}
                  images={data.images.webp.image_url}
                  score={data.score}
                  id={data.mal_id}
                  // keyProp={data.mal_id}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
