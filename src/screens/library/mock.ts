import { AlbumProps, ArtistProps, PlaylistProps } from "./types.ts";

export const PLAYLIST_MOCK: PlaylistProps[] = [
    {
        cover: undefined,
        playlistName: "Playlist 1",
    },
    {
        cover: undefined,
        playlistName: "Playlist 2",
    },
    {
        cover: undefined,
        playlistName: "Playlist 3",
    },
    {
        cover: undefined,
        playlistName: "Playlist 4",
    },
];

export const ALBUM_MOCK: AlbumProps[] = [
    {
        albumName: "Album 1",
        artistName: "Artist 1",
        cover: undefined,
    },
    {
        albumName: "Album 2",
        artistName: "Artist 1",
        cover: undefined,
    },
    {
        albumName: "Album 1",
        artistName: "Artist 2",
        cover: undefined,
    },
    {
        albumName: "Album 2",
        artistName: "Artist 2",
        cover: undefined,
    },
];

export const ARTIST_MOCK: ArtistProps[] = [
    {
        artistName: "Artist 1",
        cover: undefined,
    },
    {
        artistName: "Artist 2",
        cover: undefined,
    },
];
