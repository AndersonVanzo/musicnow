import 'react-native';

declare global {
  interface MusicLibraryModule {
    loadAllFiles: () => Promise<MusicLibrary>;
  }

  interface MusicLibrary {
    files: string;
  }

  interface MusicFile {
    id: string;
    title: string;
    album: string;
    artist: string;
    path: string;
    cover: string;
    length: string;
  }
}

declare module 'react-native' {
  interface NativeModulesStatic {
    MusicLibraryModule: MusicLibraryModule;
  }
}
