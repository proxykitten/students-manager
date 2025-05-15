export default function StudentList({ students, onDelete }) {
  return (
    <div className="space-y-2">
      {students.map((student) => (
        <div key={student.id} className="flex justify-between items-center border p-2 rounded">
          <div>
            <p><strong>{student.name}</strong> ({student.age})</p>
            <p>{student.email}</p>
          </div>
          <button onClick={() => onDelete(student.id)} className="bg-red-500 text-white px-2 py-1 rounded">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
