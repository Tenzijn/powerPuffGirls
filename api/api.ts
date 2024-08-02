import axios from 'axios';

const API_URL = 'https://api.tvmaze.com';

export const fetchShowDetails = async (showId: number) => {
  try {
    const response = await axios.get(
      `${API_URL}/shows/${showId}?embed=episodes`
    );
    return response.data;
  } catch (error) {
    throw new Error('404');
  }
};

export const fetchShowEpisodes = async (showId: number) => {
  try {
    const response = await axios.get(`${API_URL}/shows/${showId}/episodes`);
    return response.data;
  } catch (error) {
    throw new Error('404');
  }
};

export const fetchEpisodeDetails = async (episodeId: number) => {
  try {
    const response = await axios.get(`${API_URL}/episodes/${episodeId}`);
    return response.data;
  } catch (error) {
    throw new Error('404');
  }
};
