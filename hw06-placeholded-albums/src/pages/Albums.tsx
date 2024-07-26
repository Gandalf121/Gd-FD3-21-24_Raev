import {useEffect, useState} from "react";
import {getAllAlbums} from "../axios/album.ts";
import {Album} from "../type/album.ts";
import {Photo} from "../type/photo.ts";
import {getAllPhotos} from "../axios/photo.ts";
import { useNavigate } from "react-router-dom";

export function Albums() {
    const navigate = useNavigate();
    const [allAlbum, setAllAlbum] = useState<Album[]>([])
    const [allPhotos, setAllPhotos] = useState<Photo[]>([])
    useEffect(() => {
        getAllAlbums().then((res)=>{
            setAllAlbum(res.data)
            console.log(res)
            console.log(allAlbum)
        }).catch((err)=>{
            console.log(err)
        })
        getAllPhotos().then((res)=>{
            setAllPhotos(res.data)
            console.log(res)
            console.log(allPhotos)
        }).catch((err)=>{
            console.log(err)
        })

    },[])

    if (allPhotos.length===0 && allAlbum.length===0) {
        return <div>Loading...</div>;
    }
    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {allAlbum.map((album) =>{
                const mainPhoto = allPhotos.find((photo) => photo.albumId === album.id)
                if (mainPhoto) {
                    return <div key={album.id} style={{display: "flex", flexDirection: "column", width:"25rem",margin:"2rem"}}>
                        <img src={mainPhoto?.thumbnailUrl} onClick={()=> navigate(`/albums/${album.id}`)}/>
                        <p>{`${album.title} ${album.id}` }</p>
                    </div>
                }
                return <></>
            })}
        </div>
    );
}
