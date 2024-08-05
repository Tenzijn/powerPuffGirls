import axios from 'axios';
import { fetchEpisodeDetails } from '@/api/api';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('fetchEpisodeDetails', () => {
  it('should return episode details when API call is successful', async () => {
    const episodeId = 1;
    const mockData = { id: episodeId, name: 'Pilot' };

    mockedAxios.get.mockResolvedValue({ data: mockData });

    const result = await fetchEpisodeDetails(episodeId);

    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.tvmaze.com/episodes/${episodeId}`
    );
  });

  it('should throw an error when API call fails', async () => {
    const episodeId = 1;

    mockedAxios.get.mockRejectedValue(new Error('404'));

    await expect(fetchEpisodeDetails(episodeId)).rejects.toThrow('404');
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.tvmaze.com/episodes/${episodeId}`
    );
  });
});
