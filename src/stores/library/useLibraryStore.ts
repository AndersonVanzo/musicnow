import { create } from "zustand";
import { LibraryStoreProps } from "./useLibraryStore.types.ts";
import { MusicFile } from "../../modules/LibraryModule/LibraryModule.types.ts";

export const useLibraryStore = create<LibraryStoreProps>()(set => ({
    musics: [],
    setMusics: (data: MusicFile[]) => set(() => ({ musics: data })),
}));
