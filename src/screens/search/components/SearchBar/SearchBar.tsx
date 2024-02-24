import { Box } from "../../../../components/Box/Box.tsx";
import { TextInput, TextInputProps } from "react-native";
import { createBox } from "@shopify/restyle";
import { ThemeProps } from "../../../../theme/types.ts";
import { Icon } from "../../../../components/Icon/Icon.tsx";
import { theme } from "../../../../theme/theme.ts";

const InputBox = createBox<ThemeProps, TextInputProps>(TextInput);

const INPUT_HEIGHT = 48;

export const SearchBar = () => {
    return (
        <Box backgroundColor={"white"} borderRadius={12} flexDirection={"row"}>
            <Box
                alignItems={"center"}
                height={INPUT_HEIGHT}
                justifyContent={"center"}
                width={INPUT_HEIGHT}>
                <Icon color={theme.colors.black} size={24} type={"search"} />
            </Box>
            <InputBox
                height={INPUT_HEIGHT}
                placeholder={"Type something..."}
                placeholderTextColor={theme.colors.grayLight}
            />
        </Box>
    );
};
