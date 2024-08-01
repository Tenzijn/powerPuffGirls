import { fetchEpisodeDetails } from '@/api/api';
import EpisodeDetail from '@/components/episodeDetail/EpisodeDetail';

export default async function EpisodePage({
  params: { id },
}: {
  params: { id: number };
}) {
  console.log('id:', id);
  const episode = await fetchEpisodeDetails(id);

  return <EpisodeDetail episode={episode} />;
}
