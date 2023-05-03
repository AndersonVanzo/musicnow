import React from 'react';

// Navigation Import
import ConfigsIcon from '../assets/icons/navigation/configs.svg';
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

// Navigation Icons
const Configs = (props: IconProps): JSX.Element => <ConfigsIcon {...props} />;
const Home = (props: IconProps): JSX.Element => <HomeIcon {...props} />;
const Library = (props: IconProps): JSX.Element => <LibraryIcon {...props} />;

// Player Icons
const Next = (props: IconProps): JSX.Element => <NextIcon {...props} />;
const Pause = (props: IconProps): JSX.Element => <PauseIcon {...props} />;
const Play = (props: IconProps): JSX.Element => <PlayIcon {...props} />;
const Prev = (props: IconProps): JSX.Element => <PrevIcon {...props} />;

export const Icons = {
  Navigation: {
    Configs,
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
