import { Box } from "../../../../components/Box/Box.tsx";
import { Text } from "../../../../components/Text/Text.tsx";
import { LikedMusicItem } from "./components/LikedMusicItem/LikedMusicItem.tsx";

export const LikedSection = () => {
    return (
        <Box gap={"medium"} padding={"medium"}>
            <Text color={"white"} variant={"large"}>
                Liked songs
            </Text>
            <LikedMusicItem />
            <LikedMusicItem />
            <LikedMusicItem />
            <LikedMusicItem />
            <LikedMusicItem />
            <LikedMusicItem />
            <LikedMusicItem />
            <LikedMusicItem />
            <LikedMusicItem />
            <LikedMusicItem />
        </Box>
    );
};
