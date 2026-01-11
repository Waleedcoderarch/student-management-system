import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
        Global University
      </h1>

      <p className="text-xl max-w-2xl text-center mb-10 opacity-90">
        Empowering students through innovation, technology, and excellence in education.
      </p>

      <button
        onClick={() => navigate("/dashboard")}
        className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition duration-300"
      >
        Enter Student Portal →
      </button>
    </div>
  );
}
