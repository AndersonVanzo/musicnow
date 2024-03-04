import { TouchableBox } from "../../../../components/TouchableBox/TouchableBox.tsx";
import { Box } from "../../../../components/Box/Box.tsx";
import { Text } from "../../../../components/Text/Text.tsx";
import { PlaylistItemProps } from "./types.ts";
import { ImageBox } from "../../../../components/ImageBox/ImageBox.tsx";

export const PlaylistItem = ({ cover, name, size }: PlaylistItemProps) => {
    return (
        <TouchableBox
            flexDirection={"row"}
            gap={"medium"}
            paddingHorizontal={"medium"}
            paddingVertical={"extraSmall"}>
            <Box
                backgroundColor={"grayMedium"}
                borderRadius={16}
                height={size}
                overflow={"hidden"}
                width={size}>
                {!cover ? (
                    <ImageBox
                        height={"100%"}
                        resizeMode={"cover"}
                        source={require("../../../../assets/images/playlist_cover.png")}
                        width={"100%"}
                    />
                ) : null}
            </Box>
            <Box flex={1} gap={"small"} justifyContent={"center"}>
                <Text color={"white"} numberOfLines={1} variant={"mediumBold"}>
                    {name}
                </Text>
            </Box>
        </TouchableBox>
    );
};
