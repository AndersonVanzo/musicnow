import { BoxProps } from "@shopify/restyle";
import { ThemeProps } from "../../theme/types.ts";
import { SafeAreaViewProps } from "react-native-safe-area-context";

export type SafeAreaBoxProps = BoxProps<ThemeProps> & SafeAreaViewProps;
