import reducer from './index';
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer
});
export default store;
