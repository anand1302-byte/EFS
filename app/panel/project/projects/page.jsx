'use client'

import AdminNavbar from "../../../../components/admin-navbar";
import Footer from "../../../../components/admin-footer";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  PencilSimple,
  Trash,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Progress } from "@headlessui/react";
import { useState } from "react";

export default function ProjectDashboard() {
  const router = useRouter();

  const [projects, setProjects] = useState([
    {
      title: "Inventory Management System",
      description: "A complete stock and vendor management tool.",
      team: ["Anand", "Rahul", "Pooja"],
      department: "IT",
      progress: 80,
    },
    {
      title: "CRM Revamp",
      description: "Redesign and develop customer CRM platform.",
      team: ["Kiran", "Sneha"],
      department: "Marketing",
      progress: 60,
    },
    {
      title: "HR Onboarding Portal",
      description: "Portal for new employee onboarding workflows.",
      team: ["Anjali", "Raj"],
      department: "HR",
      progress: 45,
    },
    {
      title: "E-commerce Platform",
      description: "Develop an online e-commerce platform.",
      team: ["Vivek", "Sneha"],
      department: "IT",
      progress: 75,
    },
    {
      title: "Data Analytics Dashboard",
      description: "Create a dashboard for data analysis.",
      team: ["Rahul", "Anjali"],
      department: "Analytics",
      progress: 50,
    },
    {
      title: "Mobile App Development",
      description: "Develop a mobile app for iOS and Android.",
      team: ["Kiran", "Vivek"],
      department: "Mobile",
      progress: 30,
    }
  ]);

  return (
    <div className="bg-gradient-to-tr from-gray-100 to-blue-50 min-h-screen">
      <AdminNavbar />

      <main className="ml-64 pt-20 pb-16 px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <button
            onClick={() => router.push("/panel/project/createproject")}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-1 px-1  rounded-full shadow-lg transition-all duration-300"
          >
            <PlusCircleIcon size={30} className="text-white " />
          </button>

          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-1 shadow-sm hover:shadow-md transition duration-300">
            <MagnifyingGlassIcon size={20} className="text-gray-500" />
            <input
              type="text"
              name="search"
              placeholder="Search projects"
              className="w-64 py-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-gray-800 hover:cursor-pointer hover:text-blue-600" onClick={() => router.push(`/panel/project/projectdetail`)} >{proj.title}</h2>
                <p className="text-sm text-gray-500">{proj.description}</p>
              </div>

              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Department:</span> {proj.department}
              </div>

              <div className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Team:</span> {proj.team.join(", ")}
              </div>

              <div className="w-full">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{proj.progress}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 transition-all duration-300"
                    style={{ width: `${proj.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button className="p-2 hover:bg-blue-700 hover:text-white text-blue-600 border border-blue-600 rounded-full shadow transition duration-300">
                  <PencilSimple size={20} />
                </button>
                <button className="p-2 hover:bg-red-700 text-red-600 hover:text-white border border-red-600 rounded-full shadow transition duration-300">
                  <Trash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
