import { NumberProp } from "react-native-svg";
import { ColorValue } from "react-native";

export type IconType = "heart" | "heart-filled" | "house" | "library" | "search";

export type IconProps = {
    color: ColorValue;
    size: NumberProp;
    type: IconType;
};
