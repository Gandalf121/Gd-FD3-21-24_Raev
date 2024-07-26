import {User} from "../../type/user.ts";

type UserProps = {
    dataUser: User
}
const style={
    display: "flex",
}
export function UserInfo({dataUser}: UserProps) {
    return (
        <div style={{marginLeft:"3rem"}}>
            <div style={style}>
                <p className="userTextInfo">Info:</p>
            </div>
            <div style={style}>
                <p className="userTextInfo">UserName</p>
                <p className="userTextInfo">{dataUser.username}</p>
            </div>
            <div style={style}>
                <p className="userTextInfo">Name</p>
                <p className="userTextInfo">{dataUser.name}</p>
            </div>
            <div style={style}>
                <p className="userTextInfo">Email</p>
                <p className="userTextInfo">{dataUser.email}</p>
            </div>
            <div style={style}>
                <p className="userTextInfo">Company</p>
                <p className="userTextInfo">{dataUser.company.name}</p>
            </div>
        </div>
    );
}
