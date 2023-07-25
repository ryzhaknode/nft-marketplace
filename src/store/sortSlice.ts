import { createSlice } from "@reduxjs/toolkit";
import datajson from "../nftsItems.json";
import { INftItem } from "../types/INftItem";

const initialState: INftItem[] = datajson;

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    sortByBiggestPrice: (state) => {
      state.sort((a, b) => {
        if (a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    sortByCheaperPrice: (state) => {
      state.sort((a, b) => {
        if (a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    sortByName: (state) => {
      state.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    sortByDateOlder: (state) => {
      state.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        } else if (a.createdAt < b.createdAt) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    sortByDateNewest: (state) => {
      state.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return -1;
        } else if (a.createdAt > b.createdAt) {
          return 1;
        } else {
          return 0;
        }
      });
    },
  },
});

export const {
  sortByCheaperPrice,
  sortByBiggestPrice,
  sortByName,
  sortByDateOlder,
  sortByDateNewest,
} = sortSlice.actions;

export default sortSlice.reducer;
