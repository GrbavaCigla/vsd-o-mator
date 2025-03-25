import { get_latn_from_cyr } from "$lib/utils/transcript";
import { compareItems, rankItem } from "@tanstack/match-sorter-utils";
import {
    sortingFns,
    type FilterFn,
    type SortingFn,
} from "@tanstack/table-core";

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    const itemRank = rankItem(
        get_latn_from_cyr(row.getValue(columnId)),
        get_latn_from_cyr(value)!,
    );

    itemRank.passed ? console.log(itemRank) : null;

    addMeta({
        itemRank,
    });

    return itemRank.passed;
};

export const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
    let dir = 0;

    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(
            rowA.columnFiltersMeta[columnId]?.itemRank!,
            rowB.columnFiltersMeta[columnId]?.itemRank!
        );
    }

    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};
