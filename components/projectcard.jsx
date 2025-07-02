"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const [tasks, setTasks] = useState(project.tasks || []);

  const handleToggle = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const handleAddTask = () => {
    const newTask = { department: "New Dept", task: "New Task", done: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDeleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  const completedCount = tasks.filter((t) => t.done).length;
  const progress = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 space-y-6 max-w-2xl w-full">
      {/* Title & Description */}
      <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
      <p className="text-sm text-gray-600">{project.description}</p>

      {/* Team Members */}
      {project.members?.length > 0 && (
        <div>
          <h4 className="text-sm text-gray-500 font-medium mb-1">Team Members</h4>
          <div className="flex -space-x-4">
            {project.members.map((member, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full border-2 border-white shadow overflow-hidden"
                title={member.name}
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tasks */}
      {tasks.length > 0 && (
        <div>
          <div className="flex items-center justify-between">
            <h4 className="text-sm text-gray-500 font-medium mb-1">Department Tasks</h4>
            <button
              onClick={handleAddTask}
              className="text-sm px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              + Add Task
            </button>
          </div>
          <ul className="space-y-2 text-sm">
            {tasks.map((task, index) => (
              <li key={index} className="flex items-center justify-between text-gray-700">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => handleToggle(index)}
                    className="accent-blue-600 w-4 h-4"
                  />
                  <span className={`${task.done ? "line-through text-gray-400" : ""}`}>
                    <strong className="text-gray-800">{task.department}:</strong> {task.task}
                  </span>
                </div>
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Progress Bar */}
      <div>
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-600 font-medium">Progress</span>
          <span className="text-sm text-gray-700 font-semibold">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-300 ${
              progress >= 75
                ? "bg-green-500"
                : progress >= 40
                ? "bg-yellow-400"
                : "bg-red-500"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
