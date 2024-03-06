import { MainRoutesParamsList } from "../../main.routes.types.ts";

export type CustomTabBarButtonProps = {
    isFocused: boolean;
    onClickTabButton: () => void;
    routeName: keyof MainRoutesParamsList;
};
