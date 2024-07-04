import {Student} from "./Student"
import {Attendance} from "./Attendance"

export type AppState ={
    students: Student[];
    dates: string[];
    attendance: Attendance;
}