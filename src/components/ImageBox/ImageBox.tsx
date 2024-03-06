import { createBox } from "@shopify/restyle";
import FastImage, { FastImageProps } from "react-native-fast-image";
import { ThemeProps } from "../../theme/theme.types.ts";

export const ImageBox = createBox<ThemeProps, FastImageProps>(FastImage);
