import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import {TagProps} from "../../types/Tag";

type NoteState = {
    allTags: TagProps[],
};

const initialState: NoteState = {
    allTags: []
};


export const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        setTags: (state, action: PayloadAction<TagProps[]>) => {
            state.allTags = action.payload;
        },
        addNewTag: (state, action: PayloadAction<TagProps>) => {
            state.allTags=[...state.allTags, action.payload];
        },

    }
})

export const {
    setTags,addNewTag
} = tagsSlice.actions;
export const tagsReducer = tagsSlice.reducer;