import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import { createLogger } from "redux-logger";
import homeSlice from "./slices/homeSlice";

const middleware = (getDefaultMiddleware) => {
    const middlewares = [];
    if (window.location.hostname === "localhost") {
        const logger = createLogger();
        middlewares.push(logger);
    }
    return [...middlewares, ...getDefaultMiddleware()];
};



export const store = configureStore({
    reducer: {
        auth: authSlice,
        home: homeSlice
    },
    middleware
});
