import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Photo} from "../../type/photo.ts";
import {getPhotoByIdAlbum} from "../../axios/photo.ts";
import {getAlbumById} from "../../axios/album.ts";
import type { Album as AlbumType } from "../../type/album.ts";
import  arrow  from "./svgAlbum/arrow.svg";
import { useNavigate } from "react-router-dom";



export function Album() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [photos, setPhotos] = useState<Photo[]>([])
    const [album, setAlbum] = useState<AlbumType>()
    useEffect(() => {
        const albumId = id ?? '';
        getPhotoByIdAlbum(albumId).then((res)=>{
            setPhotos(res.data)
        }).catch((err) => console.log(err))
        getAlbumById(albumId).then((res)=>{

            setAlbum(res.data)
            console.log(album)
        }).catch((err) => console.log(err))
    }, []);
    if(photos.length === 0){
        return <div>Loading...</div>;
    }
    return (
        <>
            <h1>Album</h1>
            <div style={{display: "flex",alignItems:"center"}}>
                <img src={arrow} style={{width:"5rem"}} onClick={()=>navigate(`/albums`)}/>
                <p>{album?.title}</p>
            </div>
            <Link to={`/user/${album?.userId}`}>Open author page</Link>
            <img src={photos[0]?.url} style={{width:"30%",height:"400px",display: "flex",alignItems:"center", margin:"3rem"}}/>
            <h2>Photos</h2>
            <div style={{display: "flex", flexWrap:"wrap"}}>
                {photos.map((photo , index)=>
                    <div key={index} style={{display: "flex", flexDirection: "column", width: "25rem", margin: "2rem"}}>
                        <img src={photo.thumbnailUrl} onClick={(event) => {
                            event.preventDefault();
                            window.open(photo.url, '_blank');
                        }}
                        />
                        <p>{photo.title}</p>
                    </div>
                )}
            </div>
        </>


    );
}
