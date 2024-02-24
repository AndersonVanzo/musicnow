import { SafeAreaBox } from "../../components/SafeAreaBox/SafeAreaBox.tsx";
import { Text } from "../../components/Text/Text.tsx";
import { SearchBar } from "./components/SearchBar/SearchBar.tsx";

export const SearchView = () => {
    return (
        <SafeAreaBox backgroundColor={"black"} flex={1} gap={"medium"} padding={"medium"}>
            <Text color={"white"} variant={"large"}>
                Search
            </Text>
            <SearchBar />
        </SafeAreaBox>
    );
};
