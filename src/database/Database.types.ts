export type DatabaseProps = {
    clear: () => Promise<boolean>;
    getItem: (key: DatabaseKey) => Promise<any>;
    multiGet: (keys: DatabaseKey[]) => Promise<DatabaseMultiGetResponse>;
    removeItem: (key: DatabaseKey) => Promise<boolean>;
    setItem: (key: DatabaseKey, value: any) => Promise<boolean>;
};

export type DatabaseKey =
    | "albums"
    | "artists"
    | "last_artists"
    | "last_playlists"
    | "playlists"
    | "queue";

export type DatabaseMultiGetResponse = Record<DatabaseKey, string>[];
