'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Users,
  ListChecks,
  PlusCircle,
  Trash,
  CheckCircle,
  Circle,
} from '@phosphor-icons/react';

import AdminNavbar from '../../../components/admin-navbar';
import Footer from '../../../components/admin-footer';

const TodoPage = () => {
  const team = [
    {
      name: 'Anand Jethava',
      role: 'Project Lead',
      avatar: '/image/profile.png',
      tasks: ['Prepare roadmap', 'Client sync-up', 'Review team progress'],
    },
    {
      name: 'John Smith',
      role: 'Frontend Developer',
      avatar: '/image/profile.png',
      tasks: ['UI refactor', 'Fix mobile bugs', 'Push updates to repo'],
    },
    {
      name: 'Sarah Wilson',
      role: 'Backend Developer',
      avatar: '/image/profile.png',
      tasks: ['API optimization', 'Database backup', 'Swagger update'],
    },
  ];

  const [personalTodos, setPersonalTodos] = useState([
    'Update project report',
    'Email client feedback',
  ]);
  const [completed, setCompleted] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setPersonalTodos([...personalTodos, newTask]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (index) => {
    setCompleted((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleDeleteTask = (index) => {
    setPersonalTodos((prev) => prev.filter((_, i) => i !== index));
    setCompleted((prev) => prev.filter((i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navbar */}
      <AdminNavbar />

      <div className="flex">

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">To-Do Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Employee Task List */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-blue-700">
                <Users size={26} /> Employee Task List
              </h2>
              <ul className="space-y-4">
                {team.map((member, index) => (
                  <li
                    key={index}
                    className="bg-gray-50 p-4 rounded-xl flex gap-4 items-start shadow"
                  >
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={50}
                      height={50}
                      className="rounded-full border"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{member.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                      <ul className="list-disc list-inside text-sm text-gray-700">
                        {member.tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Personal To-Do List */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-green-700">
                <ListChecks size={26} /> My Personal To-Do
              </h2>

              <div className="space-y-3">
                {personalTodos.map((task, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
                  >
                    <div
                      className="flex items-center gap-3 cursor-pointer"
                      onClick={() => handleToggleComplete(index)}
                    >
                      {completed.includes(index) ? (
                        <CheckCircle size={20} className="text-green-600" />
                      ) : (
                        <Circle size={20} className="text-gray-400" />
                      )}
                      <span
                        className={`text-sm ${
                          completed.includes(index)
                            ? 'line-through text-gray-400'
                            : 'text-gray-800'
                        }`}
                      >
                        {task}
                      </span>
                    </div>
                    <button
                      onClick={() => handleDeleteTask(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add new task..."
                    className="flex-1 px-4 py-2 rounded-lg border shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <button
                    onClick={handleAddTask}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                  >
                    <PlusCircle size={18} /> Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default TodoPage;
