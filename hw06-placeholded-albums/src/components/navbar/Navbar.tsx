import {NavLink, Outlet} from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <div style={{display: "flex",justifyContent:"start",width:"100%",borderBottom:"1px solid black"}} >
                <NavLink className="navLink" to='/' style={{marginLeft:"3rem"}}>
                    <p className="textNavlink">PA</p>
                </NavLink>
                <NavLink className="navLink" to='/albums'>
                    <p className="textNavlink">Albums</p>
                </NavLink>
                <NavLink className="navLink" to='/users'>
                    <p className="textNavlink">Users</p>
                </NavLink>
            </div>
            <div>
                <Outlet/>
            </div>
        </>

    )
}