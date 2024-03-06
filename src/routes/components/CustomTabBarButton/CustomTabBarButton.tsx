import React from "react";
import { CustomTabBarButtonProps } from "./CustomTabBarButton.types.ts";
import { IconType } from "../../../components/Icon/Icon.types.ts";
import { Icon } from "../../../components/Icon/Icon.tsx";
import { theme } from "../../../theme/theme.ts";
import { TouchableBox } from "../../../components/TouchableBox/TouchableBox.tsx";

const BUTTON_SIZE = 48;

export const CustomTabBarButton = ({
    isFocused,
    onClickTabButton,
    routeName,
}: CustomTabBarButtonProps) => {
    const iconType: IconType = React.useMemo(() => {
        switch (routeName) {
            case "Home":
                return "house";
            case "Library":
                return "library";
            case "Search":
                return "search";
        }
    }, [routeName]);

    return (
        <TouchableBox
            alignItems={"center"}
            borderlessEffect={true}
            effectColor={theme.colors.black}
            height={BUTTON_SIZE}
            justifyContent={"center"}
            onPress={onClickTabButton}
            width={BUTTON_SIZE}>
            <Icon
                color={theme.colors[isFocused ? "blueLighter" : "white"]}
                size={BUTTON_SIZE * 0.6}
                type={iconType}
            />
        </TouchableBox>
    );
};
