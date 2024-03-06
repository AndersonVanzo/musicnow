import { BoxProps } from "@shopify/restyle";
import { ThemeProps } from "../../theme/theme.types.ts";
import { PressableProps } from "react-native";

export type TouchableBoxProps = BoxProps<ThemeProps> &
    PressableProps & {
        borderlessEffect?: boolean;
        effectColor?: string;
    };
