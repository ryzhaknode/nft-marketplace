import { INftItem } from "../../../shared/types/INftItem";

export const useSortState = (state: INftItem[], setState: Function) => {
  const sortByState = (key: string, boolen: boolean) => {
    const sortedState = [...state];
    if (boolen) {
      sortedState.sort((a, b) => {
        if (a[key] > b[key]) {
          return -1;
        } else if (a[key] < b[key]) {
          return 1;
        } else {
          return 0;
        }
      });
      setState(sortedState);
    } else {
      sortedState.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1;
        } else if (a[key] > b[key]) {
          return 1;
        } else {
          return 0;
        }
      });
      setState(sortedState);
    }
  };

  return [sortByState];
};
