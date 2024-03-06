import { HomeView } from "./HomeView.tsx";
import React from "react";
import { getMediaAudioPermission } from "../../utils/getMediaAudioPermission.ts";

export const HomeController = () => {
    React.useEffect(() => {
        getMediaAudioPermission();
    }, []);

    return <HomeView />;
};
