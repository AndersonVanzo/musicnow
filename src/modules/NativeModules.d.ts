import { LibraryModuleProps } from "./LibraryModule/LibraryModule.types.ts";

declare module "react-native" {
    interface NativeModulesStatic {
        LibraryModule: LibraryModuleProps;
    }
}
