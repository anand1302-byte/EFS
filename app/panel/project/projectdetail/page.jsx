"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import {
  CaretLeft,
  ChartPie,
  Users,
  Clock,
  CurrencyDollar,
  ListChecks,
  PresentationChart,
  ArrowLeft,
} from "@phosphor-icons/react";
import AdminNavbar from "@/components/admin-navbar";

const ProjectDetailPage = () => {
  const router = useRouter();
  const [project] = useState({
    name: "E-Commerce Platform Redesign",
    status: "In Progress",
    progress: 65,
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    budget: "$150,000",
    description:
      "Complete redesign of the e-commerce platform including new UI/UX, payment gateway integration, and performance optimization. The goal is to improve user experience, reduce friction, and increase sales. The project will be completed by the end of the year.",
    team: [
      {
        name: "Anand Jethava",
        role: "Project Lead",
        avatar: "/image/profile.png",
      },
      {
        name: "John Smith",
        role: "Frontend Developer",
        avatar: "/image/profile.png",
      },
      {
        name: "Sarah Wilson",
        role: "Backend Developer",
        avatar: "/image/profile.png",
      },
      {
        name: "Ravi Sharma",
        role: "UI/UX Designer",
        avatar: "/image/profile.png",
      },
      {
        name: "Priya Mehta",
        role: "Project Manager",
        avatar: "/image/profile.png",
      },
      {
        name: "Nikhil Patel",
        role: "QA Engineer",
        avatar: "/image/profile.png",
      },
      {
        name: "Anand Jethava",
        role: "Project Lead",
        avatar: "/image/profile.png",
      },
    ],
    milestones: [
      { name: "Requirement Analysis", status: "Completed", date: "2024-02-01" },
      { name: "UI/UX Design", status: "Completed", date: "2024-03-15" },
      { name: "Development Phase", status: "In Progress", date: "2024-05-30" },
      { name: "Testing & QA", status: "Pending", date: "2024-06-15" },
    ],
    recentActivity: [
      {
        type: "Update",
        description: "Frontend migration to Next.js completed",
        date: "2 days ago",
      },
      {
        type: "Meeting",
        description: "Sprint planning session conducted",
        date: "1 week ago",
      },
    ],
    documents: [
      {
        name: "Project Proposal",
        type: "PDF",
        size: "2.5 MB",
        date: "2024-01-15",
        link: "/documents/project-proposal.pdf",
      },
      {
        name: "User Flow Diagram",
        type: "PNG",
        size: "1.2 MB",
        date: "2024-02-01",
        link: "/documents/user-flow-diagram.png",
      },
      {
        name: "Wireframes",
        type: "PNG",
        size: "3.5 MB",
        date: "2024-02-15",
        link: "/documents/wireframes.zip",
      },
    ],
    tasks: [
      { name: "Design UI/UX", status: "Completed", completed: true , deadline: "2024-03-15", assignedTo: "John Smith" },
      { name: "Implement Backend", status: "In Progress", completed: false, deadline: "2024-04-30", assignedTo: "Sarah Wilson" },
      { name: "Testing & QA", status: "Pending", completed: false, deadline: "2024-06-15", assignedTo: "Ravi Sharma" },
      { name: "Deploy to Production", status: "Not Started", completed: true, deadline: "2024-07-01", assignedTo: "Priya Mehta" },
    ],
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <AdminNavbar />
      <div className="flex">
        <main className="flex-1 mt-14 p-2">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-2 mt-2"
          >
            <CaretLeft size={20} />
            <span>Back</span>
          </button>
          <div className="bg-white rounded-lg shadow-md p-4 mb-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-gray-800">
                {project.name}
              </h1>
              <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">
                {project.status}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Progress Section */}
              <div className="col-span-2 bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <PresentationChart size={24} className="text-blue-600" />
                  <h2 className="text-lg text-gray-800 font-semibold">
                    Project Progress
                  </h2>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600  h-2 rounded-full"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
                <div className="flex text-gray-800 justify-between mt-2 text-sm">
                  <span>Start Date: {project.startDate}</span>
                  <span>End Date: {project.endDate}</span>
                </div>
              </div>

              {/* Budget Section */}
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <CurrencyDollar size={24} className="text-green-600" />
                  <h2 className="text-lg text-gray-800 font-semibold">
                    Budget Overview
                  </h2>
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {project.budget}
                </div>
                <p className="text-sm text-gray-600 mt-2">Remaining: $45,000</p>
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="col-span-2">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold mb-4 text-gray-800 flex items-center gap-2">
                    <ListChecks size={20} /> Project Description
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>

                <div className="bg-white p-4 rounded-lg shadow mt-6">
                  <h3 className="text-lg text-gray-800 font-semibold mb-4 flex items-center gap-2">
                    <Users size={20} /> Team Members
                  </h3>
                  <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-[150px] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
                    {project.team.map((member, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                      >
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium text-gray-800">
                            {member.name}
                          </p>
                          <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Milestones */}
              <div className="bg-white p-4 h-full rounded-lg shadow">
                <h3 className="text-lg text-gray-800 font-semibold flex items-center gap-2 mb-4">
                  <Clock size={20} /> Milestones
                </h3>
                <div className="space-y-4 overflow-y-auto max-h-[285px]">
                  {project.milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-500 pl-3"
                    >
                      <p className="font-medium text-gray-800">
                        {milestone.name}
                      </p>
                      <p className="text-sm text-gray-500">{milestone.date}</p>
                      <span
                        className={`text-sm ${milestone.status === "Completed"
                          ? "text-green-600"
                          : "text-yellow-600"
                          }`}
                      >
                        {milestone.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents */}
              <div className="bg-white p-4 rounded-lg shadow mt-6">
                <h3 className="text-lg text-gray-800 font-semibold flex items-center gap-2">
                  <ChartPie size={20} /> Project Documents
                </h3>
                <div className="mt-4 space-y-3">
                  {project.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-800">{doc.name}</p>
                        <p className="text-xs text-gray-500">{doc.type}</p>
                        <p className="text-xs text-gray-500">{doc.size}</p>
                      </div>
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm font-medium hover:underline"
                      >
                        View
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasks */}
              <div className="bg-white p-4 rounded-lg shadow mt-6">
                <h3 className="text-lg text-gray-800 font-semibold flex items-center gap-2">
                  <ListChecks size={20} /> Project Tasks
                </h3>
                <ul className="mt-4 space-y-3">
                  {project.tasks.map((task, index) => (
                    <li
                      key={index}
                      className="flex items-start justify-between p-3 rounded-md bg-gray-50"
                    >
                      <div>
                        <p
                          className={`text-sm font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-800"
                            }`}
                        >
                          {task.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          Deadline: {task.deadline}
                        </p>
                        <p className="text-xs text-gray-500">
                          AssignTo: {task.assignedTo}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={task.completed}
                        readOnly
                        className="accent-blue-600 mt-1"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Calendar */}
              <div className="bg-white p-4 rounded-lg shadow mt-6">
                <h3 className="text-lg text-gray-800 font-semibold flex items-center gap-2 mb-3">
                  <Clock size={20} /> Project Calendar
                </h3>
                <div className="text-sm text-gray-700 space-y-2">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">June 25, 2024</span>
                    <span className="text-blue-600">Dev Review Meeting</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">June 28, 2024</span>
                    <span className="text-green-600">Deadline: Optimization Task</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">June 30, 2024</span>
                    <span className="text-yellow-600">Project End Date</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
