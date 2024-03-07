import { create } from "zustand";
import { LastArtistsStoreProps } from "./useLastArtistsStore.types.ts";
import { ArtistProps } from "../../screens/library/Library.types.ts";

export const useLastArtistsStore = create<LastArtistsStoreProps>()((set, get) => ({
    lastArtists: [],
    setLastArtists: (data: ArtistProps[]) => set(() => ({ lastArtists: data })),
    addLastArtist: (artist: ArtistProps) => {
        const newLastArtists = get().lastArtists;
        if (newLastArtists.length === 4) {
            newLastArtists.pop();
        }
        newLastArtists.unshift(artist);
        set(() => ({ lastArtists: newLastArtists }));
    },
}));
