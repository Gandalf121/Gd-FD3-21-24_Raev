import  { useState, useEffect } from "react";
import AttendanceTable from "./components/AttendanceTable"
import {AppState} from "./type/AppState"
import "./App.css"


const App = () => {
    const [tableData, setTableData] = useState<AppState>({
        students: [],
        dates: [],
        attendance: {},
    });
    console.log(tableData)
    const [isSaving, setIsSaving] = useState<boolean>(false);

    useEffect(() => {
        try {
            const storedData = localStorage.getItem("data");
            if (storedData) {
                const { students, dates, attendance } = JSON.parse(storedData);
                setTableData({ students, dates, attendance });
            }
        } catch (error) {
            console.error(error);
        }
    }, []);


    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => {
            localStorage.setItem("data", JSON.stringify(tableData));
            setIsSaving(false);
        }, 2000);
    };


    return (
        <>
            <AttendanceTable
                students={tableData.students}
                dates={tableData.dates}
                attendance={tableData.attendance}
                onAddStudent={(name) => {
                    setTableData((prev) => ({
                        ...prev,
                        students: [...prev.students, { id: prev.students.length + 1, name }],
                    }));
                }}
                onAddDate={(date) => {
                    setTableData((prev) => ({ ...prev, dates: [...prev.dates, date] }));
                }}

                onToggleAttendance={(date, studentId) => {
                    setTableData((prev) => {
                        const newAttendance = { ...prev.attendance };
                        newAttendance[date] = newAttendance[date] || {};
                        newAttendance[date][studentId] = !newAttendance[date][studentId];
                        return { ...prev, attendance: newAttendance };
                    });
                }}
                onSave={handleSave}
                isSaving={isSaving}
            />
        </>
    );
};

export default App