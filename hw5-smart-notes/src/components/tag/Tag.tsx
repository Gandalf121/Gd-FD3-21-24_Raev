import {TagProps} from "../../types/Tag";
import EditIcon from '@mui/icons-material/Edit';
import ModalWindow from "../modalWindow/ModalWindow";
import {ContentForTag} from "../modalWindow/content/ContentForTag";
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {setTags} from "../../redux/slices/tags.ts";
import {NoteProps} from "../../types/Note.ts";

export const Tag: React.FC<TagProps> = ({id, name}) => {
    const allTags = useAppSelector(state => state.tags.allTags)
    const allNotes = useAppSelector(state => state.notes.allNotes)
    const dispatch = useAppDispatch()
    const count =  allNotes.filter((note:NoteProps)=>note.tagId === id).length
    function deleteTag() {
        const newArrTags = allTags.filter((tag) => tag.id !== id)
        dispatch(setTags(newArrTags));
        localStorage.setItem("tags", JSON.stringify(newArrTags));
    }

    return (
        <div style={{display: "flex",margin:"0.5rem"}}>
            {`${name}(${count?count:0})`}
            <div style={{display:"flex", marginLeft:"1rem"}}>
                <ModalWindow content={<ContentForTag edit={true} id={id} name={name}/>} Icon={EditIcon}/>
                <DeleteIcon onClick={() =>count<=0? deleteTag():alert("This tag has entries")}/>
            </div>
        </div>
    );
};
