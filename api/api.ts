import axios from 'axios';

const API_URL = 'https://api.tvmaze.com';

export const fetchEpisodeDetails = async (episodeId: number) => {
  try {
    const response = await axios.get(`${API_URL}/episodes/${episodeId}`);
    return response.data;
  } catch (error) {
    throw new Error('404');
  }
};
