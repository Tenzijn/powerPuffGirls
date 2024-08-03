'use client';
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

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

type PowerpuffContextType = {
  shows: showType;
  getShows: () => void;
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
  getShows: () => {},
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

  useEffect(() => {
    getShows();
  }, []);

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

  return (
    <PowerpuffContext.Provider
      value={{
        shows,
        getShows,
      }}
    >
      {children}
    </PowerpuffContext.Provider>
  );
};

export { PowerpuffContext, PowerpuffProvider };
