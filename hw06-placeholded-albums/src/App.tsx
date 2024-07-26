import './App.css'
import {MainRouting} from "./routing/Mainrouting";
import axios from 'axios';
import axiosConfig from "./axios/axiosConfig.json"

axios.defaults.baseURL = axiosConfig.baseURL;

function App() {

    return (
        <MainRouting/>
    )
}

export default App