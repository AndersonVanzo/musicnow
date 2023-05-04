import { NativeModules } from 'react-native';

interface MusicLibraryInterface {
  loadAllFiles: () => Promise<string>;
}

const loadAllFiles = async (): Promise<string> => {
  return NativeModules.MusicLibraryModule.loadAllFiles();
};

export const MusicLibrary: MusicLibraryInterface = {
  loadAllFiles,
};
