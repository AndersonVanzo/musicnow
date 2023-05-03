import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PageView from '../../components/page-view/pageview';
import AlbumCover from './components/album-cover/albumcover';
import Controls from './components/controls/controls';
import { styles } from './styles';
import { colors } from '../../common/colors';
import ProgressBar from './components/progress-bar/progressbar';
import MusicInfos from './components/music-infos/musicinfos';

const GradientColors = [colors.surface, colors.background, colors.background, colors.black];

const Home = (): JSX.Element => {
  return (
    <PageView customStyle={styles.container}>
      <LinearGradient style={styles.background} colors={GradientColors}>
        <AlbumCover />
        <MusicInfos />
        <ProgressBar />
        <Controls status={'playing'} />
      </LinearGradient>
    </PageView>
  );
};

export default Home;
