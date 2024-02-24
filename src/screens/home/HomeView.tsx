import { SafeAreaBox } from "../../components/SafeAreaBox/SafeAreaBox.tsx";
import { PlaylistsSection } from "./components/PlaylistsSection/PlaylistsSection.tsx";
import { RecentSection } from "./components/RecentSection/RecentSection.tsx";
import { LikedSection } from "./components/LikedSection/LikedSection.tsx";
import { ScrollView } from "react-native";

export const HomeView = () => {
    return (
        <SafeAreaBox backgroundColor={"black"} flex={1}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <PlaylistsSection />
                <RecentSection />
                <LikedSection />
            </ScrollView>
        </SafeAreaBox>
    );
};
