import { Box } from "../../../../../../components/Box/Box.tsx";
import { Dimensions } from "react-native";
import { theme } from "../../../../../../theme/theme.ts";
import { Text } from "../../../../../../components/Text/Text.tsx";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const ITEM_WIDTH = SCREEN_WIDTH / 2 - theme.spacing.small / 2 - theme.spacing.medium;
const ITEM_HEIGHT = 56;
const ITEM_BORDER_RADIUS = 12;

export const PlaylistItem = () => {
    return (
        <Box
            backgroundColor={"grayDark"}
            borderRadius={ITEM_BORDER_RADIUS}
            flexDirection={"row"}
            height={ITEM_HEIGHT}
            width={ITEM_WIDTH}>
            <Box
                backgroundColor={"grayMedium"}
                borderRadius={ITEM_BORDER_RADIUS}
                height={ITEM_HEIGHT}
                width={ITEM_HEIGHT}
            />
            <Box flex={1} justifyContent={"space-between"} padding={"extraSmall"}>
                <Text color={"white"} numberOfLines={2} variant={"mediumBold"}>
                    Playlist Name Name
                </Text>
                <Text color={"white"} variant={"extraSmall"}>
                    by Author Name
                </Text>
            </Box>
        </Box>
    );
};
