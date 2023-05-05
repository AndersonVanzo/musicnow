import { NativeModules } from 'react-native';

interface MusicLibraryInterface {
  loadAllFiles: () => Promise<MusicLibrary>;
}

const loadAllFiles = async (): Promise<MusicLibrary> => {
  return NativeModules.MusicLibraryModule.loadAllFiles();
};

export const MusicLibrary: MusicLibraryInterface = {
  loadAllFiles,
};
