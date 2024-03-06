import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Box } from "../../../components/Box/Box.tsx";
import { CustomTabBarButton } from "../CustomTabBarButton/CustomTabBarButton.tsx";
import { MainRoutesParamsList } from "../../main.routes.types.ts";

export const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
    return (
        <Box backgroundColor={"grayDark"} flexDirection={"row"} paddingVertical={"small"}>
            {state.routes.map((route, index) => {
                const isFocused = state.index === index;

                const onClickTabButton = () => {
                    const event = navigation.emit({
                        canPreventDefault: true,
                        target: route.key,
                        type: "tabPress",
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                return (
                    <Box key={index} alignItems={"center"} flex={1} justifyContent={"center"}>
                        <CustomTabBarButton
                            isFocused={isFocused}
                            onClickTabButton={onClickTabButton}
                            routeName={route.name as keyof MainRoutesParamsList}
                        />
                    </Box>
                );
            })}
        </Box>
    );
};
