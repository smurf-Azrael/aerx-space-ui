import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: string
  frame:string
  polygon:string
  saly:string
  group1:string
  saly3:string
  saly4:string
  fly1:string
  fly2:string
  fly3:string
  star:string
  group2:string
  group3:string
  handWriting:string
  saly1:string
  saly2:string
  frame1:string
  frame2:string
  frame3:string
  logo:string

}

/**
 * Default state object with initial values.
 */
const initialState: UserState = {
  email: 'sulhadin@gmail.com',
  frame:"../Rectangle 3251.png",
  polygon:"../Polygon 4.png",
  saly:'../Saly-1.png',
  group1:'../Group 5394.png',

  saly1:'../Saly-44.png',
  saly2:'../Saly-15.png',
  frame1:'../Frame 5176.svg',
  frame2:'../Vector.png',
  frame3:'../frame 5171.png',

  group2:"../landingPage/Group 5389.png",
  group3:"../landingPage/Group 5388.png",
  handWriting:"../landingPage/Saly-25.png",

  saly3:"../Saly-35.png ",
  saly4:"../Saly-34.png ",
  fly1:"../Fly æ 5.png ",
  fly2:"../Fly æ 4.png",
  fly3:"../Fly æ 3.png ",
  star:"../star.svg ",

  logo:"../landingPage/aerx_logo-removebg-preview 1 (Traced).svg"
} as const;

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImages: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
  },
});

// A small helper of user state for `useSelector` function.
export const getUserState = (state: { images: UserState }) => state.images;

// Exports all actions
export const { setImages } = imageSlice.actions;

export default imageSlice.reducer;