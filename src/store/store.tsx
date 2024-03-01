import { combineReducers, configureStore } from '@reduxjs/toolkit';
import toolkitSlice from '../rtk_qwery/slices';

const rootReducer = combineReducers({
  tableData: toolkitSlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });
