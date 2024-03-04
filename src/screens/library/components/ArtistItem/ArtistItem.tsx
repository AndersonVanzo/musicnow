import { TouchableBox } from "../../../../components/TouchableBox/TouchableBox.tsx";
import { Box } from "../../../../components/Box/Box.tsx";
import { Text } from "../../../../components/Text/Text.tsx";
import { ArtistItemProps } from "./types.ts";
import { ImageBox } from "../../../../components/ImageBox/ImageBox.tsx";

export const ArtistItem = ({ cover, name, size }: ArtistItemProps) => {
    return (
        <TouchableBox
            flexDirection={"row"}
            gap={"medium"}
            paddingHorizontal={"medium"}
            paddingVertical={"extraSmall"}>
            <Box
                backgroundColor={"grayMedium"}
                borderRadius={size / 2}
                height={size}
                overflow={"hidden"}
                width={size}>
                {!cover ? (
                    <ImageBox
                        height={"100%"}
                        resizeMode={"cover"}
                        source={require("../../../../assets/images/artist_cover.png")}
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
