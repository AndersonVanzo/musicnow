import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainRoutesParamsList } from "./types.ts";
import { HomeController } from "../screens/home/HomeController.tsx";
import { SearchController } from "../screens/search/SearchController.tsx";
import { LibraryController } from "../screens/library/LibraryController.tsx";

const Tab = createBottomTabNavigator<MainRoutesParamsList>();

export const MainRoutes = () => {
    return (
        <Tab.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
            <Tab.Screen name={"Home"} component={HomeController} />
            <Tab.Screen name={"Search"} component={SearchController} />
            <Tab.Screen name={"Library"} component={LibraryController} />
        </Tab.Navigator>
    );
};
