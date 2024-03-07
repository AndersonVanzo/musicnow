import { MusicFile } from "../../modules/LibraryModule/LibraryModule.types.ts";

export type QueueStoreProps = {
    queue: MusicFile[];
    setQueue: (data: MusicFile[]) => void;
    addMusicToQueue: (music: MusicFile) => void;
    removeMusicFromQueue: (music: MusicFile) => void;
};
