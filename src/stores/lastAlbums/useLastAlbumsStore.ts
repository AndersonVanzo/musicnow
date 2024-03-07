import { create } from "zustand";
import { LastAlbumsStoreProps } from "./useLastAlbumsStore.types.ts";
import { AlbumProps } from "../../screens/library/Library.types.ts";

export const useLastAlbumsStore = create<LastAlbumsStoreProps>()((set, get) => ({
    lastAlbums: [],
    setLastAlbums: (data: AlbumProps[]) => set(() => ({ lastAlbums: data })),
    addLastAlbum: (album: AlbumProps) => {
        const newLastAlbums = get().lastAlbums;
        if (newLastAlbums.length === 4) {
            newLastAlbums.pop();
        }
        newLastAlbums.unshift(album);
        set(() => ({ lastAlbums: newLastAlbums }));
    },
}));
