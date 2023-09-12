import { MenuItem, Select } from "@mui/material";
import { filtersList } from "../../pages/GalleryPage/constants/filterList";
import { FilterItem } from "../../shared/types/IFilterItem";
import React from "react";

interface NftFilterProps{
    selectChange: (e: any) => void,
    selectedFilter: string,
}
function NftFilter({ selectedFilter, selectChange }:NftFilterProps) {
  return (
    <Select
      labelId="filter-label"
      id="filter-select"
      value={selectedFilter}
      onChange={selectChange}
    >
      {filtersList.map((filter: FilterItem, i) => (
        <MenuItem key={i} value={filter.label}>
          {filter.label}
        </MenuItem>
      ))}
    </Select>
  );
}

export default NftFilter;
