import { MenuItem, Select } from "@mui/material";
import { filtersList } from "../information/filterList";
import { FilterItem } from "../types/IFilterItem";

function NftFilter(props: any) {
  const { selectedFilter, selectChange } = props;
  return (
    <Select
      labelId="filter-label"
      id="filter-select"
      value={selectedFilter}
      onChange={(e) => {
        selectChange(e.target.value);
      }}
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
