import React from "react";
import {useNavigate} from "react-router-dom"
const HomeIntro = () => {
    const navigate=useNavigate()
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Stay Organized, Stay Productive
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          This Todo App helps you manage your daily tasks efficiently.
          Create categories, add tasks with priority, track pending work,
          and mark tasks as completed — all in one simple and clean interface.
        </p>

        <div className="flex justify-center gap-4">
          <button
          onClick={() => navigate("/Signup")}
           className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Get Started
          </button>
        
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
