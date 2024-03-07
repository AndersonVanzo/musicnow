import { create } from "zustand";
import { QueueStoreProps } from "./useQueueStore.types.ts";
import { MusicFile } from "../../modules/LibraryModule/LibraryModule.types.ts";

export const useQueueStore = create<QueueStoreProps>()((set, get) => ({
    queue: [],
    setQueue: (data: MusicFile[]) => set(() => ({ queue: data })),
    addMusicToQueue: (music: MusicFile) => {
        const newQueue = get().queue;
        newQueue.push(music);
        set(() => ({ queue: newQueue }));
    },
    removeMusicFromQueue: (music: MusicFile) => {
        const currentQueue = get().queue;
        const musicIndex = currentQueue.indexOf(music);
        if (musicIndex !== -1) {
            const newQueue = currentQueue.splice(musicIndex, 1);
            set(() => ({ queue: newQueue }));
        }
    },
}));
