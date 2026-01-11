import { useState } from "react";
import { addStudent } from "../services/api";

export default function AddStudentModal({ onStudentAdded }) {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
    age: "",
    schoolName: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: student.name.trim(),
      rollNo: Number(student.rollNo),
      age: Number(student.age),
      schoolName: student.schoolName.trim(),
    };

    try {
      await addStudent(payload);

      alert("Student added successfully ✅");
      setStudent({ name: "", rollNo: "", age: "", schoolName: "" });
      onStudentAdded();
    } catch (err) {
      console.error("FULL ERROR:", err);
      console.error("RESPONSE:", err.response);
      console.error("DATA:", err.response?.data);

      if (err.response?.status === 409) {
        alert("Roll number already exists ❌");
      } else if (err.response?.status === 400) {
        alert("Invalid input data ❌");
      } else {
        alert("Server error ❌");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold">Add Student</h2>

      <input
        name="name"
        placeholder="Student Name"
        value={student.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="rollNo"
        placeholder="Roll Number"
        value={student.rollNo}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="age"
        placeholder="Age"
        type="number"
        value={student.age}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="schoolName"
        placeholder="School Name"
        value={student.schoolName}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Add Student
      </button>
    </form>
  );
}
