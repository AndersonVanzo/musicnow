import { IconProps } from "./types.ts";

import House from "../../assets/icons/house.svg";
import Library from "../../assets/icons/library.svg";
import Search from "../../assets/icons/search.svg";

export const Icon = ({ color, size, type }: IconProps) => {
    switch (type) {
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
