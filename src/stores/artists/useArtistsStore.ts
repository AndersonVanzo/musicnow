import { create } from "zustand";
import { ArtistsStoreProps } from "./useArtistsStore.types.ts";
import { ArtistProps } from "../../screens/library/Library.types.ts";

export const useArtistsStore = create<ArtistsStoreProps>()(set => ({
    artists: [],
    setArtists: (data: ArtistProps[]) => set(() => ({ artists: data })),
}));
