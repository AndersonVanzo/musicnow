import { create } from "zustand";
import { AlbumsStoreProps } from "./useAlbumsStore.types.ts";
import { AlbumProps } from "../../screens/library/Library.types.ts";

export const useAlbumsStore = create<AlbumsStoreProps>()(set => ({
    albums: [],
    setAlbums: (data: AlbumProps[]) => set(() => ({ albums: data })),
}));
