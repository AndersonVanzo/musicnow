import React from "react";
import { SafeAreaBox } from "../../components/SafeAreaBox/SafeAreaBox.tsx";
import { LibraryHeader } from "./components/LibraryHeader/LibraryHeader.tsx";
import { PlaylistItem } from "./components/PlaylistItem/PlaylistItem.tsx";
import { LibraryFilter, LibraryList } from "./types.ts";
import { FlashList } from "@shopify/flash-list";
import { AlbumItem } from "./components/AlbumItem/AlbumItem.tsx";
import { ArtistItem } from "./components/ArtistItem/ArtistItem.tsx";
import { ALBUM_MOCK, ARTIST_MOCK, PLAYLIST_MOCK } from "./mock.ts";
import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme.ts";

const DEFAULT_ITEM_SIZE = 80;

export const LibraryView = () => {
    const [selectedFilter, setSelectedFilter] = React.useState<LibraryFilter>("all");
    const [renderList, setRenderList] = React.useState<LibraryList>([
        ...ARTIST_MOCK,
        ...ALBUM_MOCK,
        ...PLAYLIST_MOCK,
    ]);

    const updateRenderList = (newFilter: LibraryFilter) => {
        switch (newFilter) {
            case "artist":
                setRenderList(ARTIST_MOCK);
                break;
            case "album":
                setRenderList(ALBUM_MOCK);
                break;
            case "playlist":
                setRenderList(PLAYLIST_MOCK);
                break;
            case "all":
                setRenderList([...ARTIST_MOCK, ...ALBUM_MOCK, ...PLAYLIST_MOCK]);
                break;
        }
    };

    const clearFilter = () => {
        setSelectedFilter("all");
        updateRenderList("all");
    };

    const changeSelectedFilter = (newFilter: LibraryFilter) => {
        if (newFilter === selectedFilter) {
            return clearFilter();
        }
        setSelectedFilter(newFilter);
        updateRenderList(newFilter);
    };

    return (
        <SafeAreaBox backgroundColor={"black"} flex={1}>
            <LibraryHeader
                changeSelectedFilter={changeSelectedFilter}
                clearFilter={clearFilter}
                selectedFilter={selectedFilter}
            />
            <FlashList
                data={renderList}
                estimatedItemSize={DEFAULT_ITEM_SIZE}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item, index }) =>
                    "playlistName" in item ? (
                        <PlaylistItem
                            key={index}
                            cover={item.cover}
                            name={item.playlistName}
                            size={DEFAULT_ITEM_SIZE}
                        />
                    ) : "albumName" in item ? (
                        <AlbumItem
                            key={index}
                            artist={item.artistName}
                            cover={item.cover}
                            name={item.albumName}
                            size={DEFAULT_ITEM_SIZE}
                        />
                    ) : (
                        <ArtistItem
                            key={index}
                            cover={item.cover}
                            name={item.artistName}
                            size={DEFAULT_ITEM_SIZE}
                        />
                    )
                }
            />
        </SafeAreaBox>
    );
};

export const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: theme.spacing.medium,
    },
});
