import React from 'react';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { PlayerProvider } from './src/contexts/PlayerContext';
import { addTracks, setupPlayer } from './src/services/player/service';
import TrackPlayer from 'react-native-track-player';

const App = (): JSX.Element => {
  const initPlayer = async () => {
    let isSetup = await setupPlayer();
    const queue = await TrackPlayer.getQueue();
    if (isSetup && queue.length <= 0) {
      await addTracks();
    }
  };

  React.useEffect(() => {
    initPlayer();
  }, []);

  return (
    <PlayerProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PlayerProvider>
  );
};

export default App;
