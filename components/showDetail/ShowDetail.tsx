'use client';
import React, { useContext } from 'react';
import Image from 'next/image';
import Episodes from '../episodes/Episodes';
import DownArrow from '../downArrow/DownArrow';
import { SecondaryBtn } from '../buttons/Buttons';

import { PowerpuffContext } from '@/context/PowerpuffContext';

import classes from './ShowDetail.module.scss';

type Episodes = {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    original: string;
  };
};

type Show = {
  name: string;
  summary: string;
  genres: string[];
  url: string;
  image: {
    original: string;
  };
  _embedded: {
    episodes: Episodes[];
  };
};

const ShowDetail: React.FC = () => {
  const context = useContext(PowerpuffContext);

  const shows: Show = context.shows;

  return (
    <>
      <section className={classes.showSection}>
        <div className={classes.showDetail}>
          <Image
            fill
            className={classes.showDetail__background}
            src={shows?.image.original}
            alt='background'
            sizes='100vw'
            loading='lazy'
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={classes.showDetail__container}>
            <div className={classes.showDetail__image}>
              <Image
                src={shows?.image.original}
                alt={shows?.name}
                fill
                sizes='(width: 300px, height: 400px)'
                loading='lazy'
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className={classes.showDetail__info}>
              <h1 className={classes.showDetail__info__title}>{shows?.name}</h1>
              <ul className={classes.showDetail__info__genres}>
                {shows?.genres.map((genres) => {
                  return (
                    <li
                      key={genres}
                      className={classes.showDetail__info__genres__genre}
                    >
                      {genres}
                    </li>
                  );
                })}
              </ul>
              <div
                dangerouslySetInnerHTML={{ __html: shows?.summary }}
                className={classes.showDetail__info__summary}
              ></div>
              <SecondaryBtn text='Watch Now' url={shows?.url} />
            </div>
          </div>
          <DownArrow id='#episode' />
        </div>
      </section>

      {/* Displaying all the Episodes */}
      <Episodes show={shows} />
    </>
  );
};

export default ShowDetail;
