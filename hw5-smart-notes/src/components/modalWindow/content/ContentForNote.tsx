import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Textarea from "@mui/joy/Textarea";
import {NoteProps} from "../../../types/Note.ts";
import {addNewNote,setNotes} from "../../../redux/slices/notes.ts";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks.ts";
import {v4 as uuidv4} from "uuid";
import {useState} from "react";
import {TagProps} from "../../../types/Tag.ts";

type ContentNote = {
    edit: boolean;
    view?: boolean;
    title: string;
    data?: NoteProps;
};

const initialState={
    id: uuidv4(),
    tagId: "",
    title: "",
    text: "",
    createdAt: new Date(),
    updatedAt: new Date()
}

export const ContentForNote = ({title, view, edit, data}: ContentNote) => {
    const allNotes = useAppSelector(state=>state.notes.allNotes)
    const allTag = useAppSelector(state=>state.tags.allTags)
    const dispatch = useAppDispatch();
    const [newNote, setNewNote] = useState<NoteProps>(
        edit ? {...data} : initialState
    );


    const handleNoteChange = (key: keyof NoteProps, value: string | number) => {
        setNewNote((prevNote) => ({...prevNote, [key]: value}));
    };


    const createNewNote = () => {
        const updatedNote = {...newNote, createdAt: new Date(), updatedAt: new Date()};
        dispatch(addNewNote(updatedNote));
        localStorage.setItem("notes", JSON.stringify([...JSON.parse(localStorage.getItem("notes") || "[]"), updatedNote]));
        setNewNote({...initialState,id: uuidv4(),})
    };
    const editNote = () => {
        const updatedNote = { ...newNote, updatedAt: new Date() };
        const newArrNotes = allNotes.map((note:NoteProps) => (note.id === updatedNote.id ? updatedNote : note))
        dispatch(setNotes(newArrNotes));
        localStorage.setItem("notes", JSON.stringify(newArrNotes));
    };

    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {title}
            </Typography>

            <Box sx={{display: "flex", flexDirection:"column"}}>
                <select
                    style={{color: "white",margin:"0.5rem"}}
                    value={String(newNote?.tagId)}
                    onChange={(e) => handleNoteChange("tagId", e.target.value)}
                    disabled={view}

                >
                    <option value={0}>Select a tag</option>
                    {allTag ? allTag.map((tag: TagProps, index) => (
                        <option key={`idTeg${index}`} value={tag.id}>{tag.name}</option>
                    )) : ""}
                </select>

                <input
                    placeholder={"Title"}
                    value={String(newNote?.title)}
                    style={{margin:"0.5rem"}}
                    onChange={(e) => handleNoteChange("title", e.target.value)}
                    disabled={view}
                />
            </Box>


            <Textarea
                color="neutral"
                value={String(newNote.text)}
                minRows={2}
                placeholder="Type here text to node"
                size="lg"
                style={{margin:"0.5rem"}}
                variant="soft"
                onChange={(e) => handleNoteChange("text", e.target.value)}
                disabled={view}
            />

            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <button style={{color:"white"}} disabled={view}>Cancel</button>
                <button style={{color:"white"}} onClick={edit ? editNote : createNewNote} disabled={view}>
                    {edit ? "Save" : "Create"}
                </button>
            </Box>
        </>

    );

};