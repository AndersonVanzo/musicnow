import { create } from "zustand";
import { LastPlaylistsStoreProps } from "./useLastPlaylistsStore.types.ts";
import { PlaylistProps } from "../../screens/library/Library.types.ts";

export const useLastPlaylistsStore = create<LastPlaylistsStoreProps>()((set, get) => ({
    lastPlaylists: [],
    setLastPlaylists: (data: PlaylistProps[]) => set(() => ({ lastPlaylists: data })),
    addLastPlaylist: (playlist: PlaylistProps) => {
        const newLastPlaylists = get().lastPlaylists;
        if (newLastPlaylists.length === 4) {
            newLastPlaylists.pop();
        }
        newLastPlaylists.unshift(playlist);
        set(() => ({ lastPlaylists: newLastPlaylists }));
    },
}));
