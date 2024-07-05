import {Routes, Route, HashRouter} from "react-router-dom";
import {Start} from "../pages/Start";
import {About} from "../pages/About";
import {Terms} from "../pages/Terms";
import {Posts} from "../pages/Posts";
import Navbar from "../components/navbar/Navbar";
import {Post} from "../components/post/Post.tsx";
import {NotFoundPage} from "../pages/NotFoundPage.tsx";

export function MainRouting() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}>
                    <Route path={"start"} element={<Start/>}/>
                    <Route path={"about"} element={<About/>}/>
                    <Route path={"terms"} element={<Terms/>}/>
                    <Route path={"posts"} element={<Posts/>}/>
                    <Route path="post/:id" element={<Post/>}/>
                </Route>
                <Route>
                    <Route path="*" element={<NotFoundPage/>} />
                </Route>
            </Routes>
        </HashRouter>
    )
}