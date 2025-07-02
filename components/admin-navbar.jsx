"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Bell,
  HouseSimple,
  UsersThree,
  ChatTeardropDots,
  FolderSimple,
  CheckSquare,
  Gear,
  SignOut,
  ClipboardText,
} from "@phosphor-icons/react";
import { CheckCircle, X, Menu } from "lucide-react";

export default function AdminNavbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkClass = (path) =>
    `flex items-center gap-2 px-3 py-2 rounded-sm border-b-2 transition-all duration-150 ${
      isActive(path)
        ? "border-blue-500 text-blue-800 font-semibold"
        : "border-transparent text-gray-700 hover:text-blue-500"
    }`;

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-6 py-2 flex items-center justify-between">
        {/* Left: Hamburger for Mobile + Logo */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} className="text-gray-700" />
          </button>
          <Image src="/image/logo.png" alt="Company Logo" width={60} height={60} />
          <span className="md:ml-2 md:text-xl text-sm md:font-semibold text-gray-800">MyCompany</span>
        </div>

        {/* Right: Notifications + Profile */}
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <Bell size={24} className="text-gray-700" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/image/profile.png"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full object-cover"
            />
            <span className="md:text-gray-800 hidden md:font-medium">Admin Name</span>
          </div>
        </div>
      </header>

      {/* Sidebar for Desktop */}
      <div className="hidden md:block w-64 mt-16 h-screen fixed bg-white text-black shadow-lg pt-6">
        <SidebarLinks linkClass={linkClass} />
      </div>

      {/* Sidebar Drawer for Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 bg-trensparent bg-opacity-40 md:hidden">
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg pt-6 px-4">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button onClick={() => setSidebarOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <SidebarLinks linkClass={linkClass} />
          </div>
        </div>
      )}
    </>
  );
}

function SidebarLinks({ linkClass }) {
  return (
    <nav className="flex-1 px-2 py-4">
      <ul className="space-y-2">
        <li>
          <Link href="/panel/dashboard" className={linkClass("/panel/dashboard")}>
            <HouseSimple size={20} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/panel/user/users" className={linkClass("/panel/user/users")}>
            <UsersThree size={20} /> <span>Employees</span>
          </Link>
        </li>
        <li>
          <Link href="/panel/project/projects" className={linkClass("/panel/project/projects")}>
            <ClipboardText size={20} /> <span>Projects</span>
          </Link>
        </li>
        <li>
          <Link href="/panel/chat" className={linkClass("/panel/chat")}>
            <ChatTeardropDots size={20} /> <span>Chat</span>
          </Link>
        </li>
        <li>
          <Link href="/panel/attendance/attendanceemploye" className={linkClass("/panel/attendance/attendanceemploye")}>
            <CheckCircle size={20} /> <span>Attendance</span>
          </Link>
        </li>
        <li>
          <Link href="/panel/attendacnw" className={linkClass("/panel/feedback")}>
            <CheckCircle size={20} /> <span>Leave Request</span>
          </Link>
        </li>
        <li>
          <Link href="/panel/todo" className={linkClass("/panel/todo")}>
            <CheckSquare size={20} /> <span>TO-DO</span>
          </Link>
        </li>
        <li>
          <Link href="/projects" className={linkClass("/projects")}>
            <FolderSimple size={20} /> <span>FollowUps & Tasks</span>
          </Link>
        </li>
        <li>
          <Link href="/settings" className={linkClass("/settings")}>
            <Gear size={20} /> <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link href="/logout" className={linkClass("/logout")}>
            <SignOut size={20} /> <span>Logout</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
