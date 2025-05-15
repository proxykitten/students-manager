import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";

export const getStudents = () => axios.get(`${API_BASE}/students`);
export const createStudent = (student) => axios.post(`${API_BASE}/students/`, student);
export const deleteStudent = (id) => axios.delete(`${API_BASE}/students/${id}`);

