import { NativeModules } from "react-native";
import { LibraryModuleProps } from "./LibraryModule.types.ts";

export const LibraryModule: LibraryModuleProps = {
    loadMusicFiles: () => NativeModules.LibraryModule.loadMusicFiles(),
};
