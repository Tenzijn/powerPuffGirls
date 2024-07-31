import axios from 'axios';

const API_URL = 'https://api.tvmaze.com';

export const fetchShowDetails = async (showId: number) => {
  const response = await axios.get(`${API_URL}/shows/${showId}`);
  return response.data;
};

export const fetchShowEpisodes = async (showId: number) => {
  const response = await axios.get(`${API_URL}/shows/${showId}/episodes`);
  return response.data;
};

export const fetchShowCast = async (showId: number) => {
  const response = await axios.get(`${API_URL}/shows/${showId}/cast`);
  return response.data;
};

export const fetchEpisodeDetails = async (episodeId: number) => {
  const response = await axios.get(`${API_URL}/episodes/${episodeId}`);
  return response.data;
};
