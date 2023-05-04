import React from 'react';
import 'react-native';

declare module '*.svg' {
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare global {
  interface MusicLibraryModule {
    loadAllFiles: () => Promise<string>;
  }
}

declare module 'react-native' {
  interface NativeModulesStatic {
    MusicLibraryModule: MusicLibraryModule;
  }
}
