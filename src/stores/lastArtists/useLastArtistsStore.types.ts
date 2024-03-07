import { ArtistProps } from "../../screens/library/Library.types.ts";

export type LastArtistsStoreProps = {
    lastArtists: ArtistProps[];
    setLastArtists: (data: ArtistProps[]) => void;
    addLastArtist: (artist: ArtistProps) => void;
};
