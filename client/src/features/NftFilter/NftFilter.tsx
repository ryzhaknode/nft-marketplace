import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { filtersList } from '../../pages/GalleryPage/constants/filterList';
import { FilterItem } from '../../shared/types/IFilterItem';

interface NftFilterProps{
    sortDatajson: (key: string, sortBy: boolean) => void,
}
function NftFilter({ sortDatajson }:NftFilterProps) {
    const [selectedFilter, setSelectedFilter] = useState('');
    function selectChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        const filter = filtersList.find((lst) => lst.label === value);
        if (filter) {
            sortDatajson(filter.key, filter.sortBy);
        }
        setSelectedFilter(value);
    }

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
