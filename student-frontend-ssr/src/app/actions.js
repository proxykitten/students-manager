"use server";

export async function deleteStudent(id) {
    await fetch(`${process.env.BACKEND_URL}/students/${id}`, {
        method: "DELETE",
    });
}

export async function addStudent(formData) {
    const name = formData.get("name");
    const age = formData.get("age");
    const email = formData.get("email");

    const res = await fetch(`${process.env.BACKEND_URL}/students/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age: Number(age), email }),
    });

    if (!res.ok) {
        console.error("Failed to add student:", await res.text());
    }
}