export type LibraryFilter = "playlist" | "album" | "artist" | "all";

export type LibraryList = PlaylistProps[] | AlbumProps[] | ArtistProps[] | GeneralListProps;

export type GeneralListProps = Array<PlaylistProps | AlbumProps | ArtistProps>;

export type PlaylistProps = {
    cover?: string;
    playlistName: string;
};

export type AlbumProps = {
    albumName: string;
    artistName: string;
    cover?: string;
};

export type ArtistProps = {
    artistName: string;
    cover?: string;
};
