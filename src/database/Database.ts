import AsyncStorage from "@react-native-async-storage/async-storage";
import { DatabaseKey, DatabaseMultiGetResponse, DatabaseProps } from "./Database.types.ts";

export const Database: DatabaseProps = {
    clear: async () => {
        try {
            await AsyncStorage.clear();
            return true;
        } catch (err) {
            console.warn("An error occurred on clearing database:", err);
            return false;
        }
    },
    getItem: async (key: DatabaseKey) => {
        try {
            const data = await AsyncStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (err) {
            console.warn(`An error occurred on getting ${key} item:`, err);
            return null;
        }
    },
    multiGet: async (keys: DatabaseKey[]) => {
        try {
            return (await AsyncStorage.multiGet(keys)) as unknown as DatabaseMultiGetResponse;
        } catch (err) {
            console.warn(`An error occurred on multi get for ${keys} items:`, err);
            return [];
        }
    },
    removeItem: async (key: DatabaseKey) => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (err) {
            console.warn(`An error occurred on removing ${key} item:`, err);
            return false;
        }
    },
    setItem: async (key: DatabaseKey, value: any) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (err) {
            console.warn(`An error occurred on saving ${key} item:`, err);
            return false;
        }
    },
};
