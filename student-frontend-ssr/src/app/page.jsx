import { addStudent, deleteStudent } from "./actions";
import { revalidatePath } from "next/cache";
import DeleteButton from "./delete-button";
import AddStudentForm from "./AddStudentForm";

export default async function Home() {
  const res = await fetch(`${process.env.BACKEND_URL}/students/`, {
    cache: "no-store",
  });
  const students = await res.json();

  return (
    <>
      <AddStudentForm addStudent={async (formData) => {
        "use server";
        await addStudent(formData);
        revalidatePath("/");
      }} />

      <div className="space-y-2">
        {students.map((student) => (
          <form
            key={student.id}
            action={async () => {
              "use server";
              await deleteStudent(student.id);
              revalidatePath("/");
            }}
          >
            <div className="flex justify-between items-center gap-6 border p-4 rounded">
              <div>
                <p>
                  <strong>{student.name}</strong> ({student.age})
                </p>
                <p>{student.email}</p>
              </div>
              <DeleteButton />
            </div>
          </form>
        ))}
      </div>
    </>
  );
}
