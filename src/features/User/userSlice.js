const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const initialUser = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const initialTokenID = localStorage.getItem('tokenID') ? localStorage.getItem('tokenID') : null;

export const getUser = createAsyncThunk("user/getUser", async(params, thunkAPI) => {
    //thunkAPI.dispatch("...");
    const currentUser = await getUser();
    console.log(currentUser);
    return currentUser;
});

const user = createSlice({
    name: 'user',
    initialState: {
        user: initialUser,
        tokenID: initialTokenID,
        loading: true
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.tokenID = action.payload.etoken;

            localStorage.setItem('userInfo', JSON.stringify(action.payload));
            localStorage.setItem('tokenID', action.payload.etoken);
        },
        logoutSuccess: (state, action) => {
            state.user = null;
            state.tokenID = null;
            localStorage.removeItem('userInfo');
            localStorage.removeItem('tokenID');
            return state;
        },
    },
    extraReducers: {
        [getUser.pending]: (state) => {
            console.log("123");
            state.loading = false;
        },

        [getUser.fulfilled]: (state, action) => {
            console.log(action.payload);
            //state.user = action.payload;
        },
        [getUser.rejected]: (state, action) => {
            state.error = ''
        },
    }
});

const { reducer, actions } = user;
export const { loginSuccess, logoutSuccess } = actions;
export default reducer;