import React from 'react';
import PageView from '../../components/page-view/pageview';
import { Text, View } from 'react-native';
import { styles } from './styles';

const About = (): JSX.Element => {
  return (
    <PageView>
      <View style={styles.versionWrapper}>
        <Text style={styles.version}>v1.0.0</Text>
      </View>
    </PageView>
  );
};

export default About;
