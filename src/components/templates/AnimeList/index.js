import Card from "@/components/molecules/Card";

const Home = ({api}) => {
  return (
    <>
      <section className="container px-3 md:px-0 flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {api.data.map((anime) => {
            return (
              <div key={anime.mal_id}>
                <Card
                  title={anime.title}
                  alt={anime.title}
                  images={anime.images.webp.image_url}
                  score={anime.score}
                  id={anime.mal_id}
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
