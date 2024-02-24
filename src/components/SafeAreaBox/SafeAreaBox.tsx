import { createBox } from "@shopify/restyle";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";
import { ThemeProps } from "../../theme/types.ts";
import { SafeAreaBoxProps } from "./types.ts";

const Box = createBox<ThemeProps, SafeAreaViewProps>(SafeAreaView);

export const SafeAreaBox = (props: SafeAreaBoxProps) => {
    return <Box {...props} />;
};
