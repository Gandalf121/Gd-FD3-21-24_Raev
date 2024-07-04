export type Attendance ={
    [date: string]: { [studentId: number]: boolean };
}