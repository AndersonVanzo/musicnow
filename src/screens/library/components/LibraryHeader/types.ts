import { LibraryFilter } from "../../Library.types.ts";

export type LibraryHeaderProps = {
    changeSelectedFilter: (filter: LibraryFilter) => void;
    clearFilter: () => void;
    selectedFilter: LibraryFilter;
};
