import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/api";

export default function StudentTable({ refresh }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, [refresh]);

  const fetchStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    await deleteStudent(id);
    fetchStudents(); // refresh table
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-semibold mb-4">Students List</h3>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Age</th>
            <th>School</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-b hover:bg-gray-50">
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.rollNo}</td>
              <td>{s.age}</td>
              <td>{s.schoolName}</td>
              <td>
                <button
                  onClick={() => handleDelete(s.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
