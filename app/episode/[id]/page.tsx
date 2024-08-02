import { fetchEpisodeDetails } from '@/api/api';
import EpisodeDetail from '@/components/episodeDetail/EpisodeDetail';
import { notFound } from 'next/navigation';
export default async function EpisodePage({
  params: { id },
}: {
  params: { id: number };
}) {
  try {
    const episode = await fetchEpisodeDetails(id);
    return <EpisodeDetail episode={episode} />;
  } catch (error) {
    return notFound();
  }
}
