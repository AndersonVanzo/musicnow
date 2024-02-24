import { createTheme } from "@shopify/restyle";
import { colors } from "./colors.ts";
import { spacing } from "./spacing.ts";
import { textVariants } from "./text.ts";

export const theme = createTheme({
    colors,
    spacing,
    textVariants,
});
