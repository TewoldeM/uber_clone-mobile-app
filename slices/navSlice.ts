import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* =========================
   Types
========================= */

// Location type (Google Places result style)
export interface Location {
  lat: number;
  lng: number;
  description: string;
}

// Travel time info type
export interface TravelTimeInformation {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  status: string;
}

// Slice state type
export interface NavState {
  origin: Location | null;
  destination: Location | null;
  travelTimeInformation: TravelTimeInformation | null;
}

/* =========================
   Initial State
========================= */

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

/* =========================
   Slice
========================= */

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action: PayloadAction<Location | null>) => {
      state.origin = action.payload;
    },

    setDestination: (state, action: PayloadAction<Location | null>) => {
      state.destination = action.payload;
    }, 

    setTravelTimeInformation: (
      state,
      action: PayloadAction<TravelTimeInformation | null>,
    ) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

/* =========================
   Exports
========================= */

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

/* =========================
   Selectors
========================= */

export const selectOrigin = (state: { nav: NavState }) => state.nav.origin;

export const selectDestination = (state: { nav: NavState }) =>
  state.nav.destination;

export const selectTravelTimeInformation = (state: { nav: NavState }) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
