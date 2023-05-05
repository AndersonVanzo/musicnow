import React, { createContext } from 'react';
import TrackPlayer, { Event, Progress, State, Track, useProgress, useTrackPlayerEvents } from 'react-native-track-player';
import { interpolate, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { MusicLibrary } from '../modules/music-library/musiclibrary';

interface PlayerProviderProps {
  children: JSX.Element | Array<JSX.Element>;
}

interface PlayerContextType {
  library: Array<MusicFile>;
  progress: Progress;
  playerStatus: PlayerStatus;
  currentTrack: Track | null;
  handlePrevMusic: () => void;
  handleNextMusic: () => void;
  progressBarWidth: { width: string };
  changeCurrentTrack: (track: Track | null) => void;
  handlePlayPauseMusic: () => void;
}

type PlayerStatus = 'playing' | 'paused';

const PlayerContext = createContext<PlayerContextType>({} as PlayerContextType);

const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [playerStatus, setPlayerStatus] = React.useState<PlayerStatus>('paused');
  const [currentTrack, setCurrentTrack] = React.useState<Track | null>(null);
  const [library, setLibrary] = React.useState<MusicFile[]>([]);
  const progress = useProgress();
  const shared = useSharedValue(0);

  const progressBarWidth = useAnimatedStyle(() => ({
    width: `${interpolate(shared.value, [0, 1], [0, 100])}%`,
  }));

  const changeCurrentTrack = (track: Track | null): void => {
    setCurrentTrack(track);
  };

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      changeCurrentTrack(track);
    }
  });

  useTrackPlayerEvents([Event.PlaybackState], async event => {
    if (event.state === State.Playing) {
      setPlayerStatus('playing');
    } else {
      setPlayerStatus('paused');
    }
  });

  const handlePrevMusic = async (): Promise<void> => {
    await TrackPlayer.skipToPrevious();
    return playMusic();
  };

  const handleNextMusic = async (): Promise<void> => {
    await TrackPlayer.skipToNext();
    return playMusic();
  };

  const handlePlayPauseMusic = async (): Promise<void> => {
    const status = await TrackPlayer.getState();
    if (status === State.Playing) {
      return pauseMusic();
    }
    return playMusic();
  };

  const playMusic = async (): Promise<void> => {
    setPlayerStatus('playing');
    await TrackPlayer.play();
  };

  const pauseMusic = async (): Promise<void> => {
    setPlayerStatus('paused');
    await TrackPlayer.pause();
  };

  const changeSharedValue = React.useCallback(() => {
    const currentTime = Math.round(progress.position);
    const totalTime = Math.round(progress.duration);
    shared.value = Number((currentTime / totalTime).toFixed(2));
  }, [progress.position, progress.duration, shared]);

  const loadLibrary = async (): Promise<void> => {
    const deviceFiles = await MusicLibrary.loadAllFiles();
    const deviceMusics: Array<MusicFile> = await JSON.parse(deviceFiles.files.replace(/[\u0000-\u001F]/g, ''));
    setLibrary(deviceMusics);
  };

  React.useEffect(() => {
    changeSharedValue();
  }, [changeSharedValue]);

  React.useEffect(() => {
    loadLibrary();
  }, []);

  return (
    <PlayerContext.Provider
      value={{
        library,
        progress,
        playerStatus,
        currentTrack,
        progressBarWidth,
        handlePrevMusic,
        handleNextMusic,
        changeCurrentTrack,
        handlePlayPauseMusic,
      }}>
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerProvider, PlayerContext };
