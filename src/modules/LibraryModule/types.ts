export type MusicFile = {
    album: string;
    artist: string;
    artwork?: string;
    duration: number;
    id: string;
    title: string;
    url: string;
};

export type LibraryModuleProps = {
    loadMusicFiles: () => Promise<MusicFile[]>;
};
