import { SafeAreaBox } from "../../components/SafeAreaBox/SafeAreaBox.tsx";
import { Box } from "../../components/Box/Box.tsx";
import { PlaylistsSection } from "./components/PlaylistsSection/PlaylistsSection.tsx";

export const HomeView = () => {
    return (
        <SafeAreaBox backgroundColor={"black"} flex={1}>
            <PlaylistsSection />
            <Box />
        </SafeAreaBox>
    );
};
