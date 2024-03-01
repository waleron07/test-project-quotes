import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTableData = createAsyncThunk(
  'tableData/fetchTableData',
  async () => {
    const response = await axios.get(
      'https://futures-api.poloniex.com/api/v2/tickers'
    );
    return response.data;
  }
);

export { fetchTableData };
