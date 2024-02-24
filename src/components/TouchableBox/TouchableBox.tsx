import { createBox } from "@shopify/restyle";
import { ThemeProps } from "../../theme/types.ts";
import { Pressable, PressableProps } from "react-native";
import { TouchableBoxProps } from "./types.ts";

const Box = createBox<ThemeProps, PressableProps>(Pressable);

export const TouchableBox = ({
    children,
    borderlessEffect = false,
    ...props
}: TouchableBoxProps) => {
    return (
        <Box
            {...props}
            android_ripple={{
                borderless: borderlessEffect,
            }}>
            {children}
        </Box>
    );
};
