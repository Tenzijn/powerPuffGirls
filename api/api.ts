import axios from 'axios';

const API_URL = 'https://api.tvmaze.com';

// This function fetches the specific episode details from the API based on the episodeId

//This can be done with using context api and passing the show object to the Episodes component and then mapping over the episodes array to display the episode details.
//The EpisodeCard component can be used to display the details of each episode.
//but I want to show the both possible ways to fetch the data from the API and display it in the component.

export const fetchEpisodeDetails = async (episodeId: number) => {
  try {
    const response = await axios.get(`${API_URL}/episodes/${episodeId}`);
    return response.data;
  } catch (error) {
    throw new Error('404');
  }
};
