import { useState } from "react";
import { FaUsers, FaGraduationCap, FaUserCheck } from "react-icons/fa";
import AddStudentModal from "../components/AddStudentModal";
import StudentTable from "../components/StudentTable";

export default function Dashboard() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 animate-fadeIn">

      {/* SIDEBAR */}
      <aside className="w-64 bg-green-900 text-white p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">University</h1>
        <ul className="space-y-4">
          <li className="hover:text-green-300 cursor-pointer">Dashboard</li>
          <li className="hover:text-green-300 cursor-pointer">Students</li>
          <li className="hover:text-green-300 cursor-pointer">Add Student</li>
          <li className="hover:text-green-300 cursor-pointer">Logout</li>
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Student Dashboard
        </h2>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Students" value="Live" icon={<FaUsers />} />
          <StatCard title="Departments" value="8" icon={<FaGraduationCap />} />
          <StatCard title="Active Users" value="45" icon={<FaUserCheck />} />
        </div>

        {/* ADD STUDENT FORM */}
        <div className="mb-8">
          <AddStudentModal onStudentAdded={() => setRefresh(!refresh)} />
        </div>

        {/* STUDENT TABLE (FROM BACKEND) */}
        <StudentTable refresh={refresh} />

      </main>
    </div>
  );
}

/* SMALL COMPONENTS */

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex items-center gap-4 hover:scale-105 transition">
      <div className="text-green-700 text-3xl">{icon}</div>
      <div>
        <p className="text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );
}
