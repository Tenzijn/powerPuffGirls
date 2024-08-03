'use client';
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  use,
} from 'react';
import axios from 'axios';
import { get } from 'http';

type showType = {
  id: number;
  name: string;
  image: {
    original: string;
  };
  genres: string[];
  summary: string;
  url: string;
  _embedded: {
    episodes: episodesType[];
  };
};

type episodesType = {
  id: number;
  name: string;
  season: number;
  number: number;
  summary: string;
  image: {
    original: string;
  };
};

type episodeType = {
  id: number;
  name: string;
  season: number;
  number: number;
  summary: string;
  image: {
    original: string;
  };
};

type PowerpuffContextType = {
  shows: showType;
  episodes: episodesType[];
  currentEpisode: episodeType;
  getShows: () => void;
  getEpisodes: (id: number) => void;
  getEpisode: (episodeId: number) => void;
};

const PowerpuffContext = createContext<PowerpuffContextType>({
  shows: {
    id: 0,
    name: '',
    image: {
      original: '',
    },
    genres: [''],
    summary: '',
    url: '',
    _embedded: {
      episodes: [
        {
          id: 0,
          name: '',
          season: 0,
          number: 0,
          summary: '',
          image: {
            original: '',
          },
        },
      ],
    },
  },
  currentEpisode: {
    id: 0,
    name: '',
    season: 0,
    number: 0,
    summary: '',
    image: {
      original: '',
    },
  },
  episodes: [],
  getShows: () => {},
  getEpisodes: () => {},
  getEpisode: () => {},
});

type PowerpuffProviderProps = {
  children: ReactNode;
};

const PowerpuffProvider = ({ children }: PowerpuffProviderProps) => {
  const [shows, setShows] = useState<showType>({
    id: 0,
    name: '',
    image: {
      original: '',
    },
    genres: [''],
    summary: '',
    url: '',
    _embedded: {
      episodes: [
        {
          id: 0,
          name: '',
          season: 0,
          number: 0,
          summary: '',
          image: {
            original: '',
          },
        },
      ],
    },
  });

  const [episodes, setEpisodes] = useState<episodesType[]>([]);
  const [currentEpisode, setCurrentEpisode] = useState<episodesType>({
    id: 0,
    name: '',
    season: 0,
    number: 0,
    summary: '',
    image: {
      original: '',
    },
  });

  useEffect(() => {
    getShows();
    getEpisodes(6771);
  }, []);

  useEffect(() => {
    console.log(episodes);
  }, [episodes]);

  const getShows = async (id: number = 6771) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${id}?embed=episodes`
      );
      setShows(response.data);
    } catch (error) {
      throw new Error('404');
    }
  };

  const getEpisodes = async (id: number) => {
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${id}/episodes`
      );
      setEpisodes(response.data);
    } catch (error) {
      throw new Error('404');
    }
  };

  const getEpisode = async (episodeId: number) => {
    console.log('called');
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/episodes/${episodeId}`
      );
      setCurrentEpisode(response.data);
    } catch (error) {
      throw new Error('404');
    }
  };

  return (
    <PowerpuffContext.Provider
      value={{
        shows,
        episodes,
        currentEpisode,
        getShows,
        getEpisodes,
        getEpisode,
      }}
    >
      {children}
    </PowerpuffContext.Provider>
  );
};

export { PowerpuffContext, PowerpuffProvider };
