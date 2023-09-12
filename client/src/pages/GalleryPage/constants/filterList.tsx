import { FilterItem } from "../../../shared/types/IFilterItem";

export const filtersList: FilterItem[] = [
  {
    label: "from more expensive to cheaper",
    key: "price",
    sortBy: true,
  },
  {
    label: "from more cheaper to expensive",
    key: "price",
    sortBy: false,
  },
  {
    label: "by date of creation (oldest first)",
    key: "createdAt",
    sortBy: true,
  },
  {
    label: "by date of creation (newest first)",
    key: "createdAt",
    sortBy: false,
  },
  {
    label: "from A-Z",
    key: "name",
    sortBy: false,
  },
  {
    label: "from Z-A",
    key: "name",
    sortBy: true,
  },
];
