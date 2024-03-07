import { MusicFile } from "../../modules/LibraryModule/LibraryModule.types.ts";

export type LibraryStoreProps = {
    musics: MusicFile[];
    setMusics: (data: MusicFile[]) => void;
};
