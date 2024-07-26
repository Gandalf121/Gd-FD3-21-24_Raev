import axios from "axios";
import axiosConfig from "./axiosConfig.json"


export function getAllUsers(){
    return axios.get(axiosConfig.user.getAllUsers)
}

export function getUser(id:string){
   return axios.get(axiosConfig.user.getUser+id)
}

