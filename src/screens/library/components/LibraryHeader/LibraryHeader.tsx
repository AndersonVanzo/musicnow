import { LibraryHeaderButton } from "../LibraryHeaderButton/LibraryHeaderButton.tsx";
import { ScrollView, StyleSheet } from "react-native";
import { theme } from "../../../../theme/theme.ts";
import { ClearLibraryFilterButton } from "../ClearLibraryFilterButton/ClearLibraryFilterButton.tsx";
import { Box } from "../../../../components/Box/Box.tsx";
import { LibraryHeaderProps } from "./types.ts";

export const LibraryHeader = ({
    changeSelectedFilter,
    clearFilter,
    selectedFilter,
}: LibraryHeaderProps) => {
    return (
        <Box>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <ClearLibraryFilterButton
                    onClickClearFilterButton={clearFilter}
                    visible={selectedFilter !== "all"}
                />
                <LibraryHeaderButton
                    onSelectFilter={() => changeSelectedFilter("playlist")}
                    selected={selectedFilter === "playlist"}
                    title={"Playlists"}
                    visible={selectedFilter === "playlist" || selectedFilter === "all"}
                />
                <LibraryHeaderButton
                    onSelectFilter={() => changeSelectedFilter("album")}
                    selected={selectedFilter === "album"}
                    title={"Albums"}
                    visible={selectedFilter === "album" || selectedFilter === "all"}
                />
                <LibraryHeaderButton
                    onSelectFilter={() => changeSelectedFilter("artist")}
                    selected={selectedFilter === "artist"}
                    title={"Artists"}
                    visible={selectedFilter === "artist" || selectedFilter === "all"}
                />
            </ScrollView>
        </Box>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        gap: theme.spacing.small,
        padding: theme.spacing.medium,
        minWidth: "100%",
    },
});
