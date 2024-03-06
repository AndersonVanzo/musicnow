import { IconProps } from "./Icon.types.ts";

import Close from "../../assets/icons/close.svg";
import Heart from "../../assets/icons/heart.svg";
import HeartFilled from "../../assets/icons/heart_filled.svg";
import House from "../../assets/icons/house.svg";
import Library from "../../assets/icons/library.svg";
import Search from "../../assets/icons/search.svg";

export const Icon = ({ color, size, type }: IconProps) => {
    switch (type) {
        case "close":
            return <Close color={color} height={size} width={size} />;
        case "heart":
            return <Heart color={color} height={size} width={size} />;
        case "heart-filled":
            return <HeartFilled color={color} height={size} width={size} />;
        case "house":
            return <House color={color} height={size} width={size} />;
        case "library":
            return <Library color={color} height={size} width={size} />;
        case "search":
            return <Search color={color} height={size} width={size} />;
        default:
            return null;
    }
};
