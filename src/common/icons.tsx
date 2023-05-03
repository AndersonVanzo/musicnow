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
const Configs = ({ color, height, width }: IconProps): JSX.Element => {
  return <ConfigsIcon color={color} height={height} width={width} />;
};
const Home = ({ color, height, width }: IconProps): JSX.Element => {
  return <HomeIcon color={color} height={height} width={width} />;
};
const Library = ({ color, height, width }: IconProps): JSX.Element => {
  return <LibraryIcon color={color} height={height} width={width} />;
};

// Player Icons
const Next = ({ color, height, width }: IconProps): JSX.Element => {
  return <NextIcon color={color} height={height} width={width} />;
};
const Pause = ({ color, height, width }: IconProps): JSX.Element => {
  return <PauseIcon color={color} height={height} width={width} />;
};
const Play = ({ color, height, width }: IconProps): JSX.Element => {
  return <PlayIcon color={color} height={height} width={width} />;
};
const Prev = ({ color, height, width }: IconProps): JSX.Element => {
  return <PrevIcon color={color} height={height} width={width} />;
};

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
