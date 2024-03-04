import { LibraryHeaderButtonProps } from "./types.ts";
import { Box } from "../../../../components/Box/Box.tsx";
import { TouchableBox } from "../../../../components/TouchableBox/TouchableBox.tsx";
import { Text } from "../../../../components/Text/Text.tsx";
import { theme } from "../../../../theme/theme.ts";

const BUTTON_HEIGHT = 48;

export const LibraryHeaderButton = ({
    onSelectFilter,
    selected,
    title,
    visible,
}: LibraryHeaderButtonProps) => {
    return (
        <Box
            borderRadius={BUTTON_HEIGHT / 2}
            height={BUTTON_HEIGHT}
            overflow={"hidden"}
            visible={visible}>
            <TouchableBox
                alignItems={"center"}
                backgroundColor={selected ? "grayMedium" : "grayDark"}
                borderRadius={BUTTON_HEIGHT / 2}
                effectColor={theme.colors.grayMedium}
                flex={1}
                justifyContent={"center"}
                onPress={onSelectFilter}
                paddingHorizontal={"large"}>
                <Text color={"white"}>{title}</Text>
            </TouchableBox>
        </Box>
    );
};
