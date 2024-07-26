import { useEffect, useState } from "react";
import { getUser } from "../../axios/user.ts";
import type { User as UserType } from "../../type/user";
import { UserInfo } from "./UserInfo.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {Photo} from "../../type/photo.ts";
import {getAllPhotos} from "../../axios/photo.ts";
import {getAlbumByIdUser} from "../../axios/album.ts";
import  arrow  from "../album/svgAlbum/arrow.svg";



export function User() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [userData, setUserData] = useState<UserType | null>(null);
    const [album, setAlbum] = useState<Photo[]>([])
    const [allPhotos, setAllPhotos] = useState<Photo[]>([])

    useEffect(() => {
        const userId = id ?? '';
        getUser(userId).then((res)=>{
            setUserData(res.data)
            console.log(res)
        }).catch((err) => console.log(err))
        getAlbumByIdUser(userId).then((res)=>{
            setAlbum(res.data)
            console.log(res)
        }).catch((err) => console.log(err))
        getAllPhotos().then((res)=>{
            setAllPhotos(res.data)
        }).catch((err) => console.log(err))
    }, []);

    if (!userData) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <div style={{display: "flex",alignItems:"center"}}>
                <img src={arrow} style={{width: "5rem"}} onClick={() => navigate(`/users`)}/>
                <h1>User Profile</h1>
            </div>
            <UserInfo dataUser={userData}/>
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {album.map((album) =>{
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
        </>
    );
}
// onClick={()=>navigate(`/albums/${album.id}`)}