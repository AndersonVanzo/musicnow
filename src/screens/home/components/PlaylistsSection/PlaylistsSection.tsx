import { Box } from "../../../../components/Box/Box.tsx";
import { Text } from "../../../../components/Text/Text.tsx";
import { PlaylistItem } from "./components/PlaylistItem/PlaylistItem.tsx";

export const PlaylistsSection = () => {
    return (
        <Box gap={"medium"} padding={"medium"}>
            <Text color={"white"} variant={"large"}>
                Your playlists
            </Text>
            <Box
                flexDirection={"row"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
                rowGap={"small"}>
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
            </Box>
        </Box>
    );
};
