import {useEffect, useState} from "react";
import {getAllUsers} from "../axios/user.ts";
import {User} from "../type/user.ts";
import {Link} from "react-router-dom";

export function Users() {
    const [allUsers, setAllUsers] = useState<User[]>([])

    useEffect(() => {
        getAllUsers().then((res) => {
                setAllUsers(res.data)
                console.log(allUsers)
            }
        ).catch((err) => console.log(err))
    }, []);

    return (
        <>
            <h1>users</h1>
            <div style={{display: "flex", flexDirection: "column",justifyContent:"start",textAlign:"start",width:"100%",marginLeft:"7rem"}}>
                {allUsers.map((user, index) =>
                    <Link key={index} to={`/user/${user.id}`}>
                        {`<${user.name} #${user.id}>`}
                    </Link>
                )}

            </div>
        </>

    );
}
