import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    rememberMe: false,
    errorMessage: "",
};

export const loginUser = createAsyncThunk(
    "users/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                "http://localhost:1337/auth/local",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        identifier: email,
                        password,
                    }),
                }
            )
            let data = await response.json()
            if (response.status === 200) {
                localStorage.setItem("token", data.jwt)
                return data.user;
            } else {
                return thunkAPI.rejectWithValue(data)
            }
        } catch (e) {
            console.log("Error", e.response.data)
            thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearState: (state) => {
            state.isFetching = false;
            state.isError = false;
            state.errorMessage = "";
        },
        signOut: (state) => {
            state = initialState;
            return state;
        }
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, { payload }) => {
            state.email = payload.email;
            state.username = payload.username;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginUser.pending]: (state) => {
            state.isFetching = true;
        },
    },
})
export const userSelector = state => state.user


// Action creators are generated for each case reducer function
export const { clearState, signOut } = userSlice.actions;

export default userSlice.reducer;
