import { AlbumProps } from "../../screens/library/Library.types.ts";

export type AlbumsStoreProps = {
    albums: AlbumProps[];
    setAlbums: (data: AlbumProps[]) => void;
};
