import { createBox } from "@shopify/restyle";
import { ThemeProps } from "../../theme/theme.types.ts";
import { Pressable, PressableProps } from "react-native";
import { TouchableBoxProps } from "./TouchableBox.types.ts";

const Box = createBox<ThemeProps, PressableProps>(Pressable);

export const TouchableBox = ({
    children,
    borderlessEffect = false,
    effectColor,
    ...props
}: TouchableBoxProps) => {
    return (
        <Box
            {...props}
            android_ripple={{
                borderless: borderlessEffect,
                color: effectColor,
            }}>
            {children}
        </Box>
    );
};
