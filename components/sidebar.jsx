"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HouseSimple,
  UsersThree,
  ChatTeardropDots,
  FolderSimple,
  CheckSquare,
  Gear,
  SignOut,
  ClockCounterClockwise,
  Database,
  ClipboardText,
} from "@phosphor-icons/react";
import { CheckCircle } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const linkClass = (path) =>
    `flex items-center gap-2 px-3 py-2 rounded-sm border-b-2 transition-all duration-150 ${
      isActive(path)
        ? "border-blue-500 text-blue-800 font-semibold"
        : "border-transparent text-gray-700 hover:text-blue-500"
    }`;

  return (
    <div className="hidden md:block w-64 mt-16 h-screen fixed bg-white text-black shadow-lg pt-6">
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
    </div>
  );
}
