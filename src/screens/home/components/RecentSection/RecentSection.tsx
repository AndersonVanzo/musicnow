import { Box } from "../../../../components/Box/Box.tsx";
import { Text } from "../../../../components/Text/Text.tsx";
import { ArtistItem } from "./components/ArtistItem/ArtistItem.tsx";
import { ScrollView, StyleSheet } from "react-native";
import { theme } from "../../../../theme/theme.ts";

export const RecentSection = () => {
    return (
        <Box gap={"medium"} paddingVertical={"medium"}>
            <Box paddingHorizontal={"medium"}>
                <Text color={"white"} variant={"large"}>
                    Recently played
                </Text>
            </Box>
            <ScrollView
                contentContainerStyle={styles.scrollViewContent}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <ArtistItem />
                <ArtistItem />
                <ArtistItem />
                <ArtistItem />
                <ArtistItem />
            </ScrollView>
        </Box>
    );
};

const styles = StyleSheet.create({
    scrollViewContent: {
        gap: theme.spacing.medium,
        paddingHorizontal: theme.spacing.medium,
    },
});
