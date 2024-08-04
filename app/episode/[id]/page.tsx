import { fetchEpisodeDetails } from '@/api/api';
import EpisodeDetail from '@/components/episodeDetail/EpisodeDetail';
import { notFound } from 'next/navigation';

import { PowerpuffProvider } from '@/context/PowerpuffContext';

export default async function EpisodePage({
  params: { id },
}: {
  params: { id: number };
}) {
  try {
    const episode = await fetchEpisodeDetails(id);
    return (
      <PowerpuffProvider>
        <EpisodeDetail episode={episode} />
      </PowerpuffProvider>
    );
  } catch (error) {
    return notFound();
  }
}
