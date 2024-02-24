import { NavigationContainer } from "@react-navigation/native";
import { MainRoutes } from "./src/routes/main.routes";
import { ThemeProvider } from "@shopify/restyle";
import { theme } from "./src/theme/theme.ts";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <MainRoutes />
            </NavigationContainer>
        </ThemeProvider>
    );
};
