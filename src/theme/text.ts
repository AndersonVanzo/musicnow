import { TextVariants } from "./types.ts";

export const textVariants: TextVariants = {
    defaults: {
        color: "black",
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 16,
    },
    large: {
        fontSize: 24,
        lineHeight: 32,
    },
    largeBold: {
        fontSize: 24,
        fontWeight: "600",
        lineHeight: 32,
    },
    largeThin: {
        fontSize: 24,
        fontWeight: "300",
        lineHeight: 32,
    },
    mediumBold: {
        fontWeight: "600",
    },
    mediumThin: {
        fontWeight: "300",
    },
    small: {
        fontSize: 12,
        lineHeight: 14,
    },
    smallBold: {
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 14,
    },
    smallThin: {
        fontSize: 12,
        fontWeight: "300",
        lineHeight: 14,
    },
};
