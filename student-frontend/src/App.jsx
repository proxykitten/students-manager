import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "./api/students";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleAdd = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Manager</h1>
      <StudentForm onAdd={handleAdd} />
      <StudentList students={students} onDelete={handleDelete} />
    </div>
  );
}

export default App;
