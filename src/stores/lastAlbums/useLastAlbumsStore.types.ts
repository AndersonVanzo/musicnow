import { AlbumProps } from "../../screens/library/Library.types.ts";

export type LastAlbumsStoreProps = {
    lastAlbums: AlbumProps[];
    setLastAlbums: (data: AlbumProps[]) => void;
    addLastAlbum: (album: AlbumProps) => void;
};
