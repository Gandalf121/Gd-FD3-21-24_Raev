import {NoteProps} from "../../types/Note"
import {createSlice,PayloadAction} from "@reduxjs/toolkit";


type NoteState = {
    allNotes: NoteProps[],
    filteredNotes: NoteProps[],
};

const initialState: NoteState = {
    allNotes: [],
    filteredNotes:[]
};


export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        setNotes: (state, action: PayloadAction<NoteProps[]>) => {
            state.allNotes = action.payload;
        },
        addNewNote: (state, action: PayloadAction<NoteProps>) => {
            state.allNotes=[...state.allNotes, action.payload];
        },
        filterNotes: (state, action: PayloadAction<NoteProps[]>) => {
            state.allNotes=[ ...action.payload];
        }
    }
})

export const {
    setNotes,
    addNewNote,
    filterNotes
} = notesSlice.actions;
export const notesReducer = notesSlice.reducer;