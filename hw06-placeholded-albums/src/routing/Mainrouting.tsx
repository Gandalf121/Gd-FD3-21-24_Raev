import {Routes, Route, HashRouter} from "react-router-dom";
import {About} from "../pages/About";
import Navbar from "../components/navbar/Navbar";
import {NotFoundPage} from "../pages/NotFoundPage.tsx";
import {Albums} from "../pages/Albums.tsx";
import {Users} from "../pages/Users.tsx";
import {User} from "../components/user/User.tsx";
import {Album} from "../components/album/Album.tsx";

export function MainRouting() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navbar/>} >
                    <Route index element={<About/>}/>
                    <Route path={"albums"} element={<Albums/>}/>
                    <Route path={"albums/:id"} element={<Album/>}/>
                    <Route path={"users"} element={<Users/>}/>
                    <Route path="user/:id" element={<User/>}/>
                </Route>
                <Route>
                    <Route path="*" element={<NotFoundPage/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}