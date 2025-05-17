// src/api/students.js
import axios from "axios";

// use the Vite dev server proxy (set in vite.config.js)
const API_BASE = "/api";

export const getStudents = () => axios.get(`${API_BASE}/students/`);
export const createStudent = (student) => axios.post(`${API_BASE}/students/`, student);
export const deleteStudent = (id) => axios.delete(`${API_BASE}/students/${id}`);
