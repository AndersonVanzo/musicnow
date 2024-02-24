import { Box } from "../../../../../../components/Box/Box.tsx";
import { Text } from "../../../../../../components/Text/Text.tsx";
import { Icon } from "../../../../../../components/Icon/Icon.tsx";

const COVER_SIZE = 48;

export const LikedMusicItem = () => {
    return (
        <Box alignItems={"center"} flexDirection={"row"} gap={"medium"}>
            <Box
                backgroundColor={"grayMedium"}
                borderRadius={8}
                height={COVER_SIZE}
                width={COVER_SIZE}
            />
            <Box flex={1} gap={"extraSmall"}>
                <Text color={"white"} variant={"mediumBold"}>
                    Music Name
                </Text>
                <Text color={"grayLight"} variant={"small"}>
                    Artist Name
                </Text>
            </Box>
            <Box
                alignItems={"center"}
                height={COVER_SIZE}
                justifyContent={"center"}
                width={COVER_SIZE}>
                <Icon color={"#f00"} size={24} type={"heart-filled"} />
            </Box>
        </Box>
    );
};
