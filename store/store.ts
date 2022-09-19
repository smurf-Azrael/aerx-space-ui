import { configureStore } from "@reduxjs/toolkit";
import imageSlice from "./slices/imageSlices";
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from "react-redux";
import modulesSlice from "./slices/modulesSlices";
import postsSlice from "./slices/postsSlice";
import chargePostEventsSlice from "./slices/chargePostEventsSlice";
import messagesSlice from "./slices/messagesSlice";
import activeReceiverSlice  from "./slices/receiverSlice";
import postChargersSlice from "./slices/postChargesSlice";

export const store = configureStore({
  reducer: {
    images: imageSlice,
    modules: modulesSlice,
    posts: postsSlice,
    chargePostEvents: chargePostEventsSlice,
    messages: messagesSlice,
    activeReceiver: activeReceiverSlice,
    postChargers: postChargersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();
export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);

