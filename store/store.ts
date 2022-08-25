import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./slices/imageSlices";
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import modulesSlice from "./slices/modulesSlices";

export const store = configureStore({
  reducer: {
    images: imageSlice,
    modules: modulesSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);

