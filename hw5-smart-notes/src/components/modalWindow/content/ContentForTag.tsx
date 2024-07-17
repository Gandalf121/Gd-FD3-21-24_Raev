import Box from "@mui/material/Box";
import {useState} from "react";
import {TagProps} from "../../../types/Tag.ts";
import {v4 as uuidv4} from "uuid";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {addNewTag, setTags} from "../../../redux/slices/tags";

type ContentTag = {
    edit?: boolean;
    name?: string;
    id?:string;
};

export const ContentForTag = ({edit,name,id}:ContentTag) => {
    const dispatch = useAppDispatch();
    const allTags = useAppSelector(state=>state.tags.allTags)
    const [tag, setTag] = useState<TagProps>({
        id: uuidv4(),
        name: name||"",
        count:0
    })

    const createNewTag = () => {
        dispatch(addNewTag(tag));
        localStorage.setItem("tags", JSON.stringify([...JSON.parse(localStorage.getItem("tags") || "[]"), tag]));
    };
    const editTag = () => {
        const newArrTags = allTags.map((el:TagProps) => (el.id === id ? tag : el))
        dispatch(setTags(newArrTags));
        localStorage.setItem("tags", JSON.stringify(newArrTags));
    };

    return (
        <>
            <input value={tag.name} onChange={(e) => setTag({...tag, name: e.target.value})}
                   placeholder={"Tag"}
            style={{width:'100%',marginBottom:'20px',height:"20px"}}
            />
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <button>Cancel</button>
                <button onClick={edit ? editTag : () => createNewTag()}>
                    {edit ? "Save" : "Create"}
                </button>
            </Box>
        </>
    );
};
