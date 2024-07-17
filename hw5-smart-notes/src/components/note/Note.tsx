import {NoteProps} from "../../types/Note";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {setNotes} from "../../redux/slices/notes";
import ModalWindow from "../modalWindow/ModalWindow.tsx";
import {ContentForNote} from "../modalWindow/content/ContentForNote.tsx";
import {TagProps} from "../../types/Tag.ts";


export const Note: React.FC<NoteProps> = ({id, tagId, title, text, createdAt, updatedAt}) => {
    const dispatch = useAppDispatch();
    const notes = useAppSelector(state => state.notes.allNotes)
    const allTags = useAppSelector(state => state.tags.allTags)
    const nameTag =allTags?.filter((tag:TagProps) => tag.id === tagId)[0]?.name
    const objectForEdit={
        id,
        tagId,
        title,
        text,
        createdAt,
        updatedAt
    }
    function deleteNote(id: string) {
        const filterNote = notes.filter((note) => note.id !== id);
        localStorage.setItem('notes', JSON.stringify(filterNote));
        return filterNote;
    }

    return (
        <div className="note">
            <h3>{`Note ${title}`}</h3>
            {nameTag}
            <p>{text}</p>
            {new Date(updatedAt).getSeconds() === new Date(createdAt).getSeconds()? createdAt?.toLocaleString() : `${updatedAt?.toLocaleString()} edit`}
            <div style={{display: "flex", textAlign: "center", justifyContent: "center"}}>
                <ModalWindow
                    textButton={"View"}
                    content={<ContentForNote  edit={false} title={"View"} view={true}/>}
                />
                <ModalWindow
                    textButton={"Edit"}
                    content={<ContentForNote edit={true} title={"Edit"} data={objectForEdit}/>}
                />
                <button onClick={() =>id ? dispatch(setNotes(deleteNote(id))):console.log("not found id")}>Delete</button>
            </div>
        </div>
    );
};
