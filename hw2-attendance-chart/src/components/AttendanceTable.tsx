import React from "react";
import {Button} from "./Button";
import {Attendance} from "../type/Attendance"
import {Student} from "../type/Student"


type  Table = {

    students: Student[];
    dates: string[];
    attendance: Attendance;
    onAddStudent: (name: string) => void;
    onAddDate: (date: string) => void;
    onToggleAttendance: (date: string, studentId: number) => void;
    onSave: () => void;
    isSaving: boolean;
}


const AttendanceTable: React.FC<Table> = ({
                                               students,
                                               dates,
                                               attendance,
                                               onAddStudent,
                                               onAddDate,
                                               onToggleAttendance,
                                               onSave,
                                               isSaving,
                                           }) => {

    const handleAddStudent = () => {
        const name = prompt("Имя студента:");
        if (name) {
            onAddStudent(name);
        }
    };

    const handleAddDate = () => {
        const date = prompt("Дата в формате (YYYY-MM-DD):");
        if (date) {
            onAddDate(date);
        }
    };

    return (
        <div>
            <Button onClick={handleAddStudent} text={"добавить студента"} styles={{margin: "1rem"}}/>
            <Button onClick={handleAddDate} text={"добавить дату"} styles={{margin: "1rem"}}/>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Студент</th>
                    {dates.map((date) => (
                        <th key={date}>{date}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {students.map((student) => (
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        {dates.map((date) => (
                            <td key={date}>
                                <input
                                    type="checkbox"
                                    checked={attendance[date] && attendance[date][student.id]}
                                    onChange={() => onToggleAttendance(date, student.id)}
                                />
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <Button
                onClick={onSave}
                text={isSaving ? "Сохранение..." : "Сохранить"}
                disabled={isSaving}
                styles={{margin: "1rem"}}
            />
        </div>
    );
};

export default AttendanceTable;