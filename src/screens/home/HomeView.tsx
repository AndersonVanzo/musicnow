import { SafeAreaBox } from "../../components/SafeAreaBox/SafeAreaBox.tsx";
import { PlaylistsSection } from "./components/PlaylistsSection/PlaylistsSection.tsx";
import { RecentSection } from "./components/RecentSection/RecentSection.tsx";

export const HomeView = () => {
    return (
        <SafeAreaBox backgroundColor={"black"} flex={1}>
            <PlaylistsSection />
            <RecentSection />
        </SafeAreaBox>
    );
};
