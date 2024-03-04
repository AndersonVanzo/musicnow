import { ClearLibraryFilterButtonProps } from "./types.ts";
import { Box } from "../../../../components/Box/Box.tsx";
import { TouchableBox } from "../../../../components/TouchableBox/TouchableBox.tsx";
import { Icon } from "../../../../components/Icon/Icon.tsx";
import { theme } from "../../../../theme/theme.ts";

const BUTTON_SIZE = 48;

export const ClearLibraryFilterButton = ({
    onClickClearFilterButton,
    visible,
}: ClearLibraryFilterButtonProps) => {
    return (
        <Box
            borderRadius={BUTTON_SIZE / 2}
            height={BUTTON_SIZE}
            overflow={"hidden"}
            visible={visible}
            width={BUTTON_SIZE}>
            <TouchableBox
                alignItems={"center"}
                backgroundColor={"grayMedium"}
                flex={1}
                justifyContent={"center"}
                onPress={onClickClearFilterButton}>
                <Icon color={theme.colors.white} size={BUTTON_SIZE / 2.5} type={"close"} />
            </TouchableBox>
        </Box>
    );
};
