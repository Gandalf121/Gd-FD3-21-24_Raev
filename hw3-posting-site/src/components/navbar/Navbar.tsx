import {NavLink, Outlet} from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <div style={{display: "flex",justifyContent:"center",width:"100%"}} >
                <NavLink className="navLink" to='/start'>
                    <p className="textNavlink">Главная</p>
                </NavLink>
                <NavLink className="navLink" to='/about'>
                    <p className="textNavlink">Описание сайта</p>
                </NavLink>
                <NavLink className="navLink" to='/terms'>
                    <p className="textNavlink">Условия использования сайта</p>
                </NavLink>
                <NavLink className="navLink" to='/posts'>
                    <p className="textNavlink">Посты</p>
                </NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
            <footer>(с) 2024</footer>
        </>

    )
}