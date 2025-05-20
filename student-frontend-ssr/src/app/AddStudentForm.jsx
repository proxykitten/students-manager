"use client";

import { useState, useTransition } from "react";

export default function AddStudentForm({ addStudent }) {
    const [isPending, startTransition] = useTransition();
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", formData.name);
        data.append("age", formData.age);
        data.append("email", formData.email);

        startTransition(() => {
            addStudent(data);
        });

        setFormData({ name: "", age: "", email: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="m-1 p-1 border"
            />
            <input
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className="m-1 p-1 border"
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="m-1 p-1 border"
            />
            <button
                type="submit"
                disabled={isPending}
                className={`px-3 py-1 rounded m-1 ${isPending ? "bg-gray-400" : "bg-blue-500 text-white"
                    }`}
            >
                {isPending ? "Adding..." : "Add"}
            </button>
        </form>
    );
}
