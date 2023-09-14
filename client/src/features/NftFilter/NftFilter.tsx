import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { filtersList } from '../../pages/GalleryPage/constants/filterList';
import { FilterItem } from '../../shared/types/IFilterItem';

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
            {filtersList.map((filter: FilterItem) => (
                <MenuItem key={filter.label} value={filter.label}>
                    {filter.label}
                </MenuItem>
            ))}
        </Select>
    );
}

export default NftFilter;
