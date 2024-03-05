import Card from "@/components/molecules/Card";

const Home = ({ api }) => {
  return (
    <>
      <section className="container px-3 md:px-0 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-3">
          {api.data.map((anime) => {
            return (
              <div key={anime.mal_id}>
                <Card
                  id={anime.mal_id}
                  episode={anime.episodes}
                  status={anime.status}
                  score={anime.score}
                  alt={anime.title}
                  images={anime.images.webp.image_url}
                  title={anime.title}
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
