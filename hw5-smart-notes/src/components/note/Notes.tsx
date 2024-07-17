import {Note} from './Note'
import AddIcon from "@mui/icons-material/Add";
import "./note.css"
import {useAppSelector} from "../../redux/hooks.ts";
import ModalWindow from "../modalWindow/ModalWindow";
import {ContentForNote} from "../modalWindow/content/ContentForNote.tsx";
import {useEffect, useState} from "react";
import {NoteProps} from "../../types/Note.ts";




export const Notes = () => {
    const {allNotes}= useAppSelector(state => state.notes)
    const {allTags}= useAppSelector(state => state.tags)
    const [notes, setNotes] = useState<NoteProps[]>([])
    function searchByTitle(value:string){
        if(value){
            setNotes(allNotes.filter(note => note.title?.toLowerCase().includes(value.toLowerCase())))
        }
        if(!value){
            setNotes(allNotes)
        }
    }
    function searchByTeg(value:string){
        if(value){
            setNotes(allNotes.filter(note => note?.tagId===value))
        }
        if(!value){
            setNotes(allNotes)
        }
    }

    useEffect(() => {
        setNotes(allNotes)
    }, [allNotes]);

    return (
        <div className="notesContainer">
            <div style={{display: 'flex'}}>
                {`Notes ${notes.length}`}
                <ModalWindow
                    content={<ContentForNote title={"Add note"}  edit={false}/>}
                    Icon={AddIcon}
                />
            </div>

            <input style={{width:"50%",margin:"14px"}} onChange={(e)=>searchByTitle(e.target.value)}/>
            <select style={{width: "50%", margin: "14px"}} onChange={(e) => searchByTeg(e.target.value)}>
                <option value={""}>Select tag</option>
                {allTags.map((tag) => (
                    <option key={tag.id} value={tag.id}>{tag.name}</option>
                ))}
            </select>
            <div className="noteListContainer">
            {notes.map((note) => (
                    <Note
                        key={note.id}
                        text={note.text}
                        id={note.id}
                        createdAt={note.createdAt}
                        tagId={note.tagId}
                        title={note.title}
                        updatedAt={note.updatedAt}
                    />
                ))}
            </div>
        </div>
    );
};
