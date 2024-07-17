import './App.css'
import {Notes} from "./components/note/Notes.tsx";
import {Tags} from "./components/tag/Tags.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "./redux/hooks.ts";
import {setNotes} from "./redux/slices/notes.ts";
import {setTags} from "./redux/slices/tags.ts";
import {startNotes,startTag} from "./initialObject.ts"



function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const storedNotes = localStorage.getItem('notes');
        const storedTags = localStorage.getItem('tags');
        if(storedNotes){
            dispatch(setNotes(JSON.parse(storedNotes)))
        } else{
            localStorage.setItem('notes', JSON.stringify(startNotes));
            dispatch(setNotes(startNotes))
        }
        if(storedTags){
            dispatch(setTags(JSON.parse(storedTags)))
        } else{
            localStorage.setItem('tags', JSON.stringify(startTag));
            dispatch(setTags(startTag))
        }

    }, []);


    return (
        <>
            <div style={{display:"flex"}}>
                <Notes/>
                <Tags/>
            </div>
        </>
    )
}

export default App
