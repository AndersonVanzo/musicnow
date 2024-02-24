import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "./src/routes/main.routes";

export const App = () => {
    return (
        <NavigationContainer>
            <MainRoutes />
        </NavigationContainer>
    );
};
