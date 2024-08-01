type EpisodeDetailProps = {
  episode: {
    name: string;
    summary: string;
    image: {
      original: string;
    };
  };
};

const EpisodeDetail: React.FC<EpisodeDetailProps> = ({ episode }) => {
  return (
    <>
      <h1>{episode.name}</h1>
      <p>{episode.summary}</p>
      <img src={episode.image.original} alt={episode.name} />
    </>
  );
};

export default EpisodeDetail;
