import { PermissionsAndroid } from "react-native";

export const getMediaAudioPermission = async () => {
    const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_AUDIO!,
    );
    return permission === PermissionsAndroid.RESULTS.GRANTED;
};
