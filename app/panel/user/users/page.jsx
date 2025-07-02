'use client'
import Image from "next/image";
import Link from "next/link";
import AdminNavbar from "../../../../components/admin-navbar";
import Footer from "../../../../components/admin-footer";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  PencilSimple,
  Trash,
  PhoneCallIcon,
  WhatsappLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { Input } from "@headlessui/react";

export default function Dashboard() {
  const router = useRouter();

  // Dummy list (you can replace this with dynamic data from DB/API)
  const employees = [
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    {
      name: "Anand Jethava",
      role: "Admin",
      joined: "01/01/2023",
      status: "Active",
      image: "/image/profile.png",
    },
    
  ];

  return (
    <div className="bg-gradient-to-tr from-gray-100 to-blue-50 min-h-screen">
      <AdminNavbar />

      <main className="ml-64 pt-20 pb-16 px-6">
        {/* Add Button */}

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Add Employee Button */}
          <button
            onClick={() => router.push("/panel/user/createuser")}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-1 px-1  rounded-full shadow-lg transition-all duration-300"
          >
            <PlusCircleIcon size={30} className="text-white " />
          </button>

          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-1 shadow-sm hover:shadow-md transition duration-300">
            <MagnifyingGlassIcon size={20} className="text-gray-500" />
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="w-64 py-1 bg-transparent outline-none text-gray-800 placeholder:text-gray-500"
            />
          </div>
        </div>


        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl">
          {employees.map((emp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Image & Name */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500">
                  <Image
                    src={emp.image}
                    alt="Profile"
                    width={50}
                    height={50}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <Link href="/panel/user/userdetail">
                  <h2 className="text-lg font-bold text-gray-800">
                    {emp.name}
                  </h2>
                  </Link>
                  <p className="text-sm text-gray-500">{emp.role}</p>
                  <span className="inline-block px-2 text-xs border border-green-800 font-bold text-green-800 rounded-full">
                    {emp.status}
                  </span>
                </div>
              </div>

              {/* Social Icons */}
              <div>
                <div className="flex gap-3 text-gray-500">
                  <button className="hover:text-blue-500 transition-colors duration-200">
                    <PhoneCallIcon size={25} />
                  </button>
                  <button className="hover:text-green-500 transition-colors duration-200">
                    <WhatsappLogoIcon size={25} />
                  </button>
                  <button className="hover:text-blue-700 transition-colors duration-200">
                    <LinkedinLogoIcon size={25} />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
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
