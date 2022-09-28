import { configureStore } from "@reduxjs/toolkit";
import dateSlice from "../Redux/dateSlice";

const store = configureStore({
    reducer: {
        date: dateSlice
    }
})

export default store