import { useState } from "react";
import { createStudent } from "../api/students";

export default function StudentForm({ onAdd }) {
  const [student, setStudent] = useState({ name: "", age: "", email: "" });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createStudent({ ...student, age: parseInt(student.age) });
    onAdd(res.data);
    setStudent({ name: "", age: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input name="name" value={student.name} onChange={handleChange} placeholder="Name" className="m-1 p-1 border" />
      <input name="age" value={student.age} onChange={handleChange} placeholder="Age" className="m-1 p-1 border" />
      <input name="email" value={student.email} onChange={handleChange} placeholder="Email" className="m-1 p-1 border" />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded m-1">Add</button>
    </form>
  );
}
