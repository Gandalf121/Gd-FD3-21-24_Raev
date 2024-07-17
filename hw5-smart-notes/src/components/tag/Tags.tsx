import {Tag} from "./Tag.tsx";
import "./tag.css"
import { useAppSelector} from "../../redux/hooks.ts";
import ModalWindow from "../modalWindow/ModalWindow.tsx";
import {ContentForTag} from "../modalWindow/content/ContentForTag.tsx";
import AddIcon from "@mui/icons-material/Add";
import {useEffect, useState} from "react";
import {TagProps} from "../../types/Tag.ts";

export const Tags = () => {
    const arrTag = useAppSelector(state=>state.tags.allTags)
    const [tags, setTags] = useState<TagProps[]>([])
    function searchByTitle(value:string){
        if(value){
            setTags(arrTag.filter(tag => tag?.name.toLowerCase().includes(value.toLowerCase())))
        }
        if(!value){
            setTags(arrTag)
        }
    }
    useEffect(() => {
        setTags(arrTag)
    }, [arrTag]);
    return (
        <div className="tagsContainer">
            <div style={{display: "flex"}}>
                {`Tags ${tags.length}`}
                <ModalWindow content={<ContentForTag/>} Icon={AddIcon}/>
            </div>
            <input style={{width: "50%", margin:"14px 0 14px 0"}} onChange={(e) => searchByTitle(e.target.value)}/>
            <div className="tagListContainer">
                {tags.map((tag) => (
                    <Tag
                        id={tag.id}
                        name={tag.name}
                        count={tag.count}
                    />
                ))}
            </div>
        </div>

    );
};
