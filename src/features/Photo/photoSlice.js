import { createSlice } from "@reduxjs/toolkit";

const photo = createSlice({
    name: "photos",
    initialState: [],
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload);
        },
        removePhoto: (state, action) => {
            state = state.filter(photo => photo.id === action.payload);
            return state;
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            const indexPhoto = state.findIndex(photo => photo.id === newPhoto.id);
            if (indexPhoto >= 0) {
                state[indexPhoto] = newPhoto;
            }
        }
    }
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;