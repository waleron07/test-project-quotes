import { createSlice } from '@reduxjs/toolkit';
import { fetchTableData } from '@/api';
import {
  InitTableDataType,
  ItemQuotesType,
  ItemQuotesRequestType,
} from './types';

const initialState: InitTableDataType = {
  error: null,
  data: {
    quotesA: [],
    quotesB: [],
  },
};

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableData.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchTableData.fulfilled, (state, action) => {
        const tableData = action.payload.data.map(
          (el: ItemQuotesRequestType): ItemQuotesType => {
            return {
              symbol: el?.symbol,
              size: el?.size,
              tradeId: el?.tradeId,
              sequence: el?.sequence,
              price: el?.price,
              side: el?.side,
            };
          }
        );
        const middleIndex = Math.floor(tableData.length / 2);
        state.data.quotesA = tableData.slice(0, middleIndex);
        state.data.quotesB = tableData.slice(middleIndex, tableData.length);
        state.error = null;
      })
      .addCase(fetchTableData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default toolkitSlice;
export { fetchTableData };
