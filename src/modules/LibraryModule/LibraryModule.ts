import { LibraryModuleProps } from "./types.ts";
import { NativeModules } from "react-native";

export const LibraryModule: LibraryModuleProps = {
    loadMusicFiles: () => NativeModules.LibraryModule.loadMusicFiles(),
};
