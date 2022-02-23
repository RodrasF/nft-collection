import { configureStore } from "@reduxjs/toolkit";
import * as example from "./example.duck"
import * as nftCollections from "./nftcollections.duck"

const store = configureStore({
    reducer: {
        example: example.reducer,
        nftCollections: nftCollections.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store