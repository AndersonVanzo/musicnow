import { PlaylistProps } from "../../screens/library/Library.types.ts";

export type LastPlaylistsStoreProps = {
    lastPlaylists: PlaylistProps[];
    setLastPlaylists: (data: PlaylistProps[]) => void;
    addLastPlaylist: (playlist: PlaylistProps) => void;
};
