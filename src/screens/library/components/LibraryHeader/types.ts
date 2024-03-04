import { LibraryFilter } from "../../types.ts";

export type LibraryHeaderProps = {
    changeSelectedFilter: (filter: LibraryFilter) => void;
    clearFilter: () => void;
    selectedFilter: LibraryFilter;
};
