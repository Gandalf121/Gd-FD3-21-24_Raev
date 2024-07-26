import axios from "axios";
import axiosConfig from "./axiosConfig.json"


export function getAllAlbums(){
    return axios.get(axiosConfig.album.getAllAlbums)
}

export function getAlbumById(id:string){
    return axios.get(axiosConfig.album.getAlbum+id)
}

export function getAlbumByIdUser(id:string){
    return axios.get(axiosConfig.album.getAlbumByIdUser+id)
}