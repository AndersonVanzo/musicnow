import { ArtistProps } from "../../screens/library/Library.types.ts";

export type ArtistsStoreProps = {
    artists: ArtistProps[];
    setArtists: (data: ArtistProps[]) => void;
};
