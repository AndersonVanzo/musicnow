import { Box } from "../../../../../../components/Box/Box.tsx";
import { Text } from "../../../../../../components/Text/Text.tsx";

const COVER_SIZE = 124;

export const ArtistItem = () => {
    return (
        <Box alignItems={"center"} gap={"small"} width={COVER_SIZE}>
            <Box
                backgroundColor={"grayMedium"}
                borderRadius={COVER_SIZE * 0.25}
                height={COVER_SIZE}
                width={COVER_SIZE}
            />
            <Text color={"white"} numberOfLines={1}>
                Artist Name
            </Text>
        </Box>
    );
};
