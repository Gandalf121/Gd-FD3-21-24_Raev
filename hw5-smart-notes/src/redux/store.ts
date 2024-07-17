import { configureStore } from '@reduxjs/toolkit';
import {notesReducer} from "./slices/notes";
import {tagsReducer} from "./slices/tags.ts";


export const store = configureStore({
    reducer: {
        notes: notesReducer,
        tags:tagsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;