import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// login
export const login = createAsyncThunk(
    "user/login",
    async (data, { dispatch, rejectWithValue }) => {
        try {

            const response = await axios.post(`${process.env.REACT_APP_API_URI}/users/login`, data);

            if (response.status !== 200) {
                throw new Error("Error logging in");
            }
            const token = response.data.token;
            localStorage.setItem("token", JSON.stringify(token));

            dispatch(getUser(token));
        } catch (error) {
            return rejectWithValue(error.response.data.message);
        }
    }
);


// login with token
export const getUser = createAsyncThunk(
    "user/getUser",
    async (token, { rejectWithValue }) => {

        try {

            const response = await axios.get(`${process.env.REACT_APP_API_URI}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status !== 200) {
                throw new Error("Error logging in");
            }
            return response.data.user;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)