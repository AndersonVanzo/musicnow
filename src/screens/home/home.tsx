import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PageView from '../../components/page-view/pageview';
import AlbumCover from './components/album-cover/albumcover';
import Controls from './components/controls/controls';
import { styles } from './styles';
import { colors } from '../../common/colors';
import Progressbar from './components/progress-bar/progressbar';

const GradientColors = [colors.surface, colors.background, colors.background, colors.black];

const Home = (): JSX.Element => {
  return (
    <PageView customStyle={styles.container}>
      <LinearGradient style={styles.background} colors={GradientColors}>
        <AlbumCover />
        <Progressbar />
        <Controls status={'playing'} />
      </LinearGradient>
    </PageView>
  );
};

export default Home;
