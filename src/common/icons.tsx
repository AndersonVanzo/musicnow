import React from 'react';

// General Import
import SearchIcon from '../assets/icons/general/search.svg';

// Navigation Import
import AboutIcon from '../assets/icons/navigation/about.svg';
import HomeIcon from '../assets/icons/navigation/home.svg';
import LibraryIcon from '../assets/icons/navigation/library.svg';

// Player Import
import NextIcon from '../assets/icons/player/next.svg';
import PauseIcon from '../assets/icons/player/pause.svg';
import PlayIcon from '../assets/icons/player/play.svg';
import PrevIcon from '../assets/icons/player/prev.svg';

interface IconProps {
  color: string;
  height: number | string;
  width: number | string;
}

// General Icons
const Search = (props: IconProps): JSX.Element => {
  return <SearchIcon {...props} />;
};

// Navigation Icons
const About = (props: IconProps): JSX.Element => {
  return <AboutIcon {...props} />;
};
const Home = (props: IconProps): JSX.Element => {
  return <HomeIcon {...props} />;
};
const Library = (props: IconProps): JSX.Element => {
  return <LibraryIcon {...props} />;
};

// Player Icons
const Next = (props: IconProps): JSX.Element => {
  return <NextIcon {...props} />;
};
const Pause = (props: IconProps): JSX.Element => {
  return <PauseIcon {...props} />;
};
const Play = (props: IconProps): JSX.Element => {
  return <PlayIcon {...props} />;
};
const Prev = (props: IconProps): JSX.Element => {
  return <PrevIcon {...props} />;
};

export const Icons = {
  General: {
    Search,
  },
  Navigation: {
    About,
    Home,
    Library,
  },
  Player: {
    Next,
    Pause,
    Play,
    Prev,
  },
};
