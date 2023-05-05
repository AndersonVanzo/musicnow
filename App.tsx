import React from 'react';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { PlayerProvider } from './src/contexts/PlayerContext';
import { setupPlayer } from './src/services/player/service';
import { ActivityIndicator, Text, View } from 'react-native';
import { colors } from './src/common/colors';

const App = (): JSX.Element => {
  const [initializing, setInitializing] = React.useState<boolean>(true);
  const [initialized, setInitialized] = React.useState<boolean>(false);

  const initPlayer = async () => {
    setInitializing(true);
    let success = await setupPlayer();
    setInitialized(success);
    setInitializing(false);
  };

  React.useEffect(() => {
    initPlayer();
  }, []);

  if (initializing) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }

  if (!initialized) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: colors.text }}>error</Text>
      </View>
    );
  }

  return (
    <PlayerProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PlayerProvider>
  );
};

export default App;
