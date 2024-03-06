import { LibraryModuleProps } from "./LibraryModule/types.ts";

declare module "react-native" {
    interface NativeModulesStatic {
        LibraryModule: LibraryModuleProps;
    }
}
